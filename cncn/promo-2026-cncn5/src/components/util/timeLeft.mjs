const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

export const calculateTimeLeft = (targetDate, now) => {
  const distance = Math.max(targetDate - now, 0)

  return {
    days: Math.floor(distance / DAY),
    hours: Math.floor((distance % DAY) / HOUR),
    minutes: Math.floor((distance % HOUR) / MINUTE),
    seconds: Math.floor((distance % MINUTE) / SECOND),
  }
}
