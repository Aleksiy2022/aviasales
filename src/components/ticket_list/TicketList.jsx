import Ticket from '../ticket/Ticket.jsx'
import { Button } from 'antd'
import classes from './ticket-list.module.scss'
import { useSelector } from 'react-redux'
import { selectCurrentSortedValue } from '../ticket_sorter/ticketSorterSlice.js'
import { selectTransferFilterData } from '../transfer_filter/transferFilterSlice.js'
import { useGetSearchIdQuery, useGetTicketsQuery } from '../api/apiSlice.js'
import { useLoadAllTickets } from '../api/hooks.js'
import { useState } from 'react'

export default function TicketList() {
  const [visibleCount, setVisibleCount] = useState(5)
  const sortedValue = useSelector(selectCurrentSortedValue)
  const { data: searchIdData = [] } = useGetSearchIdQuery()
  const searchId = searchIdData.searchId

  const { data: ticketsData } = useGetTicketsQuery(searchId, { skip: !searchId })
  const tickets = ticketsData
  const stop = ticketsData?.stop
  useLoadAllTickets(searchId, tickets, stop, sortedValue)

  let ticketsToRender = null

  if (tickets) {
    const ticketsIdsToShow = tickets.ids.slice(0, visibleCount)
    ticketsToRender = ticketsIdsToShow.map((id) => {
      return (
        <li key={id} className={classes['ticket-wrapper']}>
          <Ticket ticket={tickets.entities[id]} />
        </li>
      )
    })
  }

  return (
    <>
      <ul className={`${classes['list-reset']} ${classes['ticket-list']} }`}>{ticketsToRender}</ul>
      <Button
        rootClassName={classes['ticket-list__btn']}
        variant="solid"
        onClick={() => setVisibleCount((currentCount) => currentCount + 5)}
      >
        Показать еще 5 билетов!
      </Button>
    </>
  )
}
