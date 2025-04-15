import Ticket from '../ticket/Ticket.jsx'
import { Button } from 'antd'
import classes from './ticket-list.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentSortedValue } from '../ticket_sorter/ticketSorterSlice.js'
import { selectTransferFilterData } from '../transfer_filter/transferFilterSlice.js'
import { useGetSearchIdQuery, useGetTicketsQuery } from '../api/apiSlice.js'
import { useLoadAllTickets } from '../api/hooks.js'

export default function TicketList() {
  const { data: searchIdData = [] } = useGetSearchIdQuery()
  const searchId = searchIdData.searchId

  const { data: ticketsData } = useGetTicketsQuery(searchId, { skip: !searchId })
  const tickets = ticketsData?.tickets
  const stop = ticketsData?.stop

  useLoadAllTickets(searchId, tickets, stop)

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
