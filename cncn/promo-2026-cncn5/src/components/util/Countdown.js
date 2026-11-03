import React, { useState, useEffect } from 'react'
import { calculateTimeLeft } from './timeLeft.mjs'

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(null)

  useEffect(() => {
    const tick = () => {
      setTimeLeft(calculateTimeLeft(targetDate, new Date()))
    }

    tick()
    const interval = setInterval(tick, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  if (!timeLeft) {
    return <div>&nbsp;</div>
  }

  return (
    <div>
      <span>{timeLeft.days}日 &nbsp;</span>
      <span>{timeLeft.hours}時間 &nbsp;</span>
      <span>{timeLeft.minutes}分 &nbsp;</span>
      <span>{timeLeft.seconds}秒 &nbsp;</span>
    </div>
  )
}

export default Countdown
