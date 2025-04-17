import Ticket from '../ticket/Ticket.jsx'
import classes from './ticket-list.module.scss'
import { useSelector } from 'react-redux'
import { selectCurrentSortedValue } from '../ticket_sorter/ticketSorterSlice.js'
import { selectTransferFilterData } from '../transfer_filter/transferFilterSlice.js'
import { useGetSearchIdQuery, useGetTicketsQuery } from '../api/apiSlice.js'
import { selectVisibleCount } from '../tickets_button/ticketsButtonSlice.js'
import { useLoadAllTickets } from '../api/hooks.js'
import { sortTickets, filterTickets } from './utils.js'
import { useMemo } from 'react'

export default function TicketList() {
  const visibleCount = useSelector(selectVisibleCount)
  const transferFilter = useSelector(selectTransferFilterData)
  const sortedValue = useSelector(selectCurrentSortedValue)

  const { data: searchIdData } = useGetSearchIdQuery()
  const searchId = searchIdData?.searchId

  const { data: ticketsData } = useGetTicketsQuery(searchId, { skip: !searchId })
  const tickets = ticketsData?.tickets || []
  const stop = ticketsData?.stop
  useLoadAllTickets(searchId, ticketsData, stop)

  const filteredTickets = filterTickets(tickets, transferFilter)
  const sortedTickets = useMemo(() => sortTickets(filteredTickets, sortedValue), [tickets, sortedValue, transferFilter])
  const ticketsToShow = sortedTickets.slice(0, visibleCount)
  return (
    <ul className={`${classes['list-reset']} ${classes['ticket-list']}`}>
      {ticketsToShow.map((ticket) => (
        <li key={ticket.id} className={classes['ticket-wrapper']}>
          <Ticket ticket={ticket} />
        </li>
      ))}
    </ul>
  )
}
