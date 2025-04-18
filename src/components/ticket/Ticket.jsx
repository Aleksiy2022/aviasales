import classes from './ticket.module.scss'
import { formatTime, formatDuration } from './utils.js'
import { memo } from 'react'

export const Ticket = memo(function Ticket({ ticket }) {
  return (
    <>
      <div className={classes['ticket-title']}>
        <span className={classes['ticket-title__price']}>{ticket.price} Р</span>
        <img src={`https://pics.avs.io/110/36/${ticket.carrier}.png`} alt={`Логотип авиакомпании ${ticket.carrier}`} />
      </div>
      <div className={classes['ticket-info']}>
        {ticket.segments.map((segment, index) => (
          <FlightInfo key={index} segment={segment} />
        ))}
      </div>
    </>
  )
})

function FlightInfo({ segment }) {
  const formattedTime = formatTime(segment.date, segment.duration)
  const formattedDuration = formatDuration(segment.duration)
  const transfers = {
    0: 'без пересадок',
    1: '1 пересадка',
    2: '2 пересадки',
    3: '3 пересадки',
  }
  return (
    <ul className={`${classes['list-reset']} ${classes['ticket-info__list']}`}>
      <li className={classes['ticket-info__item']}>
        <span className={classes['ticket-info__title']}>
          {segment.origin} - {segment.destination}
        </span>
        <span className={classes['ticket-info__description']}>{formattedTime}</span>
      </li>
      <li className={classes['ticket-info__item']}>
        <span className={classes['ticket-info__title']}>В ПУТИ</span>
        <span className={classes['ticket-info__description']}>{formattedDuration}</span>
      </li>
      <li className={classes['ticket-info__item']}>
        <span className={classes['ticket-info__title']}>{transfers[segment.stops.length.toString()]}</span>
        <span className={classes['ticket-info__description']}>{segment.stops.join(' ')}</span>
      </li>
    </ul>
  )
}
