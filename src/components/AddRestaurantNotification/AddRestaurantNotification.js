import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const AddRestaurantNotification = () => {
  const state = useSelector(state => state)
  const [showNotification, setShowNotification] = useState(false)
  const restaurant = state.notification

  useEffect(() => {
    setShowNotification(true)
    const delayInMs = 10000
    const display = setTimeout(() => {
      setShowNotification(false)
    }, delayInMs)
    return () => {
      clearTimeout(display)
    }
  }, [restaurant])

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (showNotification ?
    <div style={style}>
      <div>
        Thanks for adding '{restaurant}'
      </div>
    </div> : null
    )
}

export default AddRestaurantNotification;