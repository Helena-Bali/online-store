import express from 'express'
import path from 'path'
import cors from 'cors'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'
import axios from 'axios'

import cookieParser from 'cookie-parser'
import config from './config'
import Html from '../client/html'


const { readFile, writeFile, unlink} = require('fs').promises

require('colors')

const getLogs = () => {
  return readFile(`${__dirname}/data/logs.json`, { encoding: 'utf8' })
    .then((data) => JSON.parse(data))
    .catch(async () => {
      await writeFile(`${__dirname}/data/logs.json`, '[]', { encoding: 'utf8' })
      return []
    })
}

const setLogs = (logs = [], body = {}) => {
  writeFile(`${__dirname}/data/logs.json`, JSON.stringify([body, ...logs]), { encoding: 'utf8' })
}


const deleteLogs = () => {
  return unlink(`${__dirname}/data/logs.json`)
}

let Root
try {
  // eslint-disable-next-line import/no-unresolved
  Root = require('../dist/assets/js/ssr/root.bundle').default
} catch {
  console.log('SSR not found. Please run "yarn run build:ssr"'.red)
}

let connections = []

const port = process.env.PORT || 8090
const server = express()

const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  express.json({ limit: '50mb', extended: true }),
  cookieParser()
]

middleware.forEach((it) => server.use(it))

server.get('/api/v1/goods', async (req, res) => {
  const readGoods = await readFile(`${__dirname}/data/goods.json`)
    .then((f) => JSON.parse(f))
    .catch(() => ({ message: 'There is nothing here' }))
  res.json(readGoods)
})

server.get('/api/v1/rates', async (req, res) => {
  const rates = await axios('https://api.exchangerate.host/latest?base=USD').then(({ data }) => data.rates)
  res.json(rates)
})

server.get('/api/v1/logs', async (req, res) => {
  const logs = await getLogs()
  res.json(logs)
})

server.post('/api/v1/logs', async (req, res) => {
  const logs = await getLogs()
  setLogs(logs, req.body)
  res.send("Logs updated")
})

server.delete('/delete/api/v1/logs', async (req, res) => {
  await deleteLogs()
    .then(() => res.send("Log's file deleted"))
    .catch(() => res.send('No such file in directory')
    )
})

server.get('/delete/api/v1/logs', async (req, res) => {
  await deleteLogs()
  res.send("Log's file deleted")
})

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

const [htmlStart, htmlEnd] = Html({
  body: 'separator',
  title: 'Skillcrucial'
}).split('separator')

server.get('/', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

server.get('/*', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

const app = server.listen(port)

if (config.isSocketsEnabled) {
  const echo = sockjs.createServer()
  echo.on('connection', (conn) => {
    connections.push(conn)
    conn.on('data', async () => { })

    conn.on('close', () => {
      connections = connections.filter((c) => c.readyState !== 3)
    })
  })
  echo.installHandlers(app, { prefix: '/ws' })
}
console.log(`Serving at http://localhost:${port}`)
