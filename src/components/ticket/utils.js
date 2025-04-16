import { format, parseISO, addMinutes } from 'date-fns'

function formatTime(isoDate, duration) {
  const formatedDepartureTime = format(parseISO(isoDate), 'HH:mm')
  const arrivalTime = addMinutes(parseISO(isoDate), duration)
  const formatedArrivalTime = format(arrivalTime, 'HH:mm')
  return `${formatedDepartureTime} - ${formatedArrivalTime}`
}

function formatDuration(duration) {
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60
  return `${hours}ч ${minutes}м`
}

export { formatTime, formatDuration }
