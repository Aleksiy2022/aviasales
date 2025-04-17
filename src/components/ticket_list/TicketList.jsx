import { Ticket } from '../ticket/Ticket.jsx'
import classes from './ticket-list.module.scss'
import { useSelector } from 'react-redux'
import { selectCurrentSortedValue } from '../ticket_sorter/ticketSorterSlice.js'
import { selectTransferFilterData } from '../transfer_filter/transferFilterSlice.js'
import { useGetSearchIdQuery, useGetTicketsQuery } from '../api/hooks.js'
import { selectVisibleCount } from '../tickets_button/ticketsButtonSlice.js'
import { useLoadAllTickets } from '../api/hooks.js'
import { sortTickets, filterTickets } from './utils.js'
import { useMemo } from 'react'
import TicketsButton from "../tickets_button/TicketsButton.jsx";

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

  const filteredTickets = useMemo(() => filterTickets(tickets, transferFilter), [tickets, transferFilter])
  const sortedTickets = useMemo(() => sortTickets(filteredTickets, sortedValue), [filteredTickets, sortedValue])

  const ticketsToShow = sortedTickets.slice(0, visibleCount)

  const message = <div className={classes['message']}>Рейсов, подходящих под заданные фильтры, не найдено</div>

  const content = (
    <>
      <ul className={`${classes['list-reset']} ${classes['ticket-list']}`}>
        {ticketsToShow.map((ticket) => (
          <li key={ticket.id} className={classes['ticket-wrapper']}>
            <Ticket ticket={ticket} />
          </li>
        ))}
      </ul>
      <TicketsButton />
    </>
  )
  return <>{transferFilter.every((filter) => !filter.checked) ? message : content}</>
}
