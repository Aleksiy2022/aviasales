import classes from './ticket.module.scss'
import { formatTime, formatDuration } from './utils.js'

export default function Ticket({ ticket }) {
  return (
    <>
      <div className={classes['ticket-title']}>
        <span className={classes['ticket-title__price']}>{ticket.price} Р</span>
        <img src={`https://pics.avs.io/110/36/${ticket.carrier}.png`} alt="логотип авиакомпании" />
      </div>
      <div className={`${classes['ticket-info']}`}>
        {ticket.segments.map((segment, index) => {
          return <FlightInfo key={index} segment={segment} />
        })}
      </div>
    </>
  )
}

function FlightInfo({ segment }) {
  const formatedTime = formatTime(segment.date, segment.duration)
  const formatedDuration = formatDuration(segment.duration)

  return (
    <ul className={`${classes['list-reset']} ${classes['ticket-info__list']}`}>
      <li className={`${classes['ticket-info__item']}`}>
        <span className={`${classes['ticket-info__title']}`}>
          {segment.origin} - {segment.destination}
        </span>
        <span className={`${classes['ticket-info__description']}`}>{formatedTime}</span>
      </li>
      <li className={`${classes['ticket-info__item']}`}>
        <span className={`${classes['ticket-info__title']}`}>В ПУТИ</span>
        <span className={`${classes['ticket-info__description']}`}>{formatedDuration}</span>
      </li>
      <li className={`${classes['ticket-info__item']}`}>
        <span className={`${classes['ticket-info__title']}`}>{segment.stops.length} ПЕРЕСАДКИ</span>
        <span className={`${classes['ticket-info__description']}`}>{segment.stops.join(' ')}</span>
      </li>
    </ul>
  )
}