import React, { useState, useEffect } from 'react'

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime()
    const distance = targetDate - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    return {
      days,
      hours,
      minutes,
      seconds,
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

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
