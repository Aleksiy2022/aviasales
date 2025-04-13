import Ticket from '../ticket/Ticket.jsx'
import { Button } from 'antd'
import classes from './ticket-list.module.scss'

export default function TicketList() {

  return (
    <>
      <ul className={`${classes['list-reset']} ${classes['ticket-list']} }`}>
        <Ticket/>
        <Ticket/>
        <Ticket/>
        <Ticket/>
        <Ticket/>
      </ul>
      <Button rootClassName={classes['ticket-list__btn']} variant='solid'>Показать еще 5 билетов!</Button>
    </>
  )
}