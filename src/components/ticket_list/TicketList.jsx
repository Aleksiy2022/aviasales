import Ticket from '../ticket/Ticket.jsx'
import classes from './ticket-list.module.scss'
import { useSelector } from 'react-redux'
import { selectCurrentSortedValue } from '../ticket_sorter/ticketSorterSlice.js'
import { selectTransferFilterData } from '../transfer_filter/transferFilterSlice.js'
import { useGetSearchIdQuery, useGetTicketsQuery } from '../api/apiSlice.js'
import { selectVisibleCount } from '../tickets_button/ticketsButtonSlice.js'
import { useLoadAllTickets } from '../api/hooks.js'
import { sortTickets } from './utils.js'

export default function TicketList() {
  const visibleCount = useSelector(selectVisibleCount)
  const sortedValue = useSelector(selectCurrentSortedValue)
  const { data: searchIdData = [] } = useGetSearchIdQuery()
  const searchId = searchIdData.searchId

  const { data: ticketsData } = useGetTicketsQuery(searchId, { skip: !searchId })
  const stop = ticketsData?.stop
  useLoadAllTickets(searchId, ticketsData, stop)

  let ticketsToRender = null

  if (ticketsData) {
    const sortedTickets = sortTickets(ticketsData.tickets, sortedValue)
    let ticketsToView = sortedTickets.slice(0, visibleCount)
    ticketsToRender = ticketsToView.map((ticket) => {
      return (
        <li key={ticket.id} className={classes['ticket-wrapper']}>
          <Ticket ticket={ticket} />
        </li>
      )
    })
  }

  return (
    <ul className={`${classes['list-reset']} ${classes['ticket-list']} }`}>{ticketsToRender}</ul>
  )
}
