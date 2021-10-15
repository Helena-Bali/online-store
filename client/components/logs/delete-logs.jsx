import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteLogs } from '../../redux/reducers/logs-reducer'

const deleteLogs = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(deleteLogs())
    // return () => { }
  }, [])
  return (
    <div>
      "Logs deleted"
    </div>
  )
}

export default deleteLogs