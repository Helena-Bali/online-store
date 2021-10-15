import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Header from '../header/header'
import { getLogs } from '../../redux/reducers/logs-reducer'

const Logs = () => {
  const dispatch = useDispatch()
  const logs = useSelector((store) => store.logsReducer.listOfLogs)
  useEffect(() => {
    dispatch(getLogs())
    axios({
      method: 'post',
      url: 'api/v1/logs',
      data: {
        time: +new Date(),
        action: `navigate to /logs page`
      }
    }).catch((err) => console.log(err))
    return () => { }
  }, [])
  return (
    <div>
      <Header />
      {logs.map((it) => {
        return (
          <div key={it.time}>
            <div>{Date(it.time)}</div>
            <div>{it.action}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Logs