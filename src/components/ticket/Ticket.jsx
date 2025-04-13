import classes from './ticket.module.scss'

export default function Ticket() {

  return (
    <li className={classes['ticket-wrapper']}>
      <div className={classes['ticket-title']}>
        <span className={classes['ticket-title__price']}>13 400 Р</span>
        <img src='https://pics.avs.io/110/36/S7.png' alt="логотип авиакомпании" />
      </div>
      <div className={`${classes['ticket-info']}`}>
        <FlightInfo></FlightInfo>
        <FlightInfo></FlightInfo>
      </div>
    </li>
  )
}

function FlightInfo() {
  return (
    <ul className={`${classes['list-reset']} ${classes['ticket-info__list']}`}>
      <li className={`${classes['ticket-info__item']}`}>
        <span className={`${classes['ticket-info__title']}`}>MOW - HKT</span>
        <span className={`${classes['ticket-info__description']}`}>10:45 - 08:00</span>
      </li>
      <li className={`${classes['ticket-info__item']}`}>
        <span className={`${classes['ticket-info__title']}`}>В ПУТИ</span>
        <span className={`${classes['ticket-info__description']}`}>21ч 15м</span>
      </li>
      <li className={`${classes['ticket-info__item']}`}>
        <span className={`${classes['ticket-info__title']}`}>2 ПЕРЕСАДКИ</span>
        <span className={`${classes['ticket-info__description']}`}>HKG, JNB</span>
      </li>
    </ul>
  )
}