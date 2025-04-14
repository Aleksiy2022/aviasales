import Ticket from '../ticket/Ticket.jsx'
import { Button } from 'antd'
import classes from './ticket-list.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTickets, selectTickets, selectIsLoading, selectError } from './ticketListSlice.js'
import { selectCurrentSortedValue } from '../ticket_sorter/ticketSorterSlice.js'
import { selectTransferFilterData } from '../transfer_filter/transferFilterSlice.js'
import { useEffect } from 'react'

export default function TicketList() {
  const dispatch = useDispatch()
  const sort = useSelector(selectCurrentSortedValue)
  const filter = useSelector(selectTransferFilterData)

  const tickets = useSelector(selectTickets)
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  console.log('tickets: ', tickets)
  useEffect(() => {
    if (isLoading) {
      dispatch(fetchTickets())
    }
  }, [tickets])

  return (
    <>
      <ul className={`${classes['list-reset']} ${classes['ticket-list']} }`}>
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </ul>
      <Button rootClassName={classes['ticket-list__btn']} variant="solid">
        Показать еще 5 билетов!
      </Button>
    </>
  )
}
