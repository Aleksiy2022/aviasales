function sortTickets(tickets, sortedValue) {
  const ticketsCopy = [...tickets]

  const getDuration = (ticket) => ticket.segments[0].duration + ticket.segments[1].duration
  const getOptimalData = (ticket) => ticket.price + getDuration(ticket) * 15

  switch (sortedValue) {
    case 'price':
      return ticketsCopy.sort((a, b) => a.price - b.price)
    case 'duration':
      return ticketsCopy.sort((a, b) => getDuration(a) - getDuration(b))
    case 'optimal':
      return ticketsCopy.sort((a, b) => getOptimalData(a) - getOptimalData(b))
  }
}

function filterTickets(tickets, transferFilter) {
  const filterValues = transferFilter.filter((item) => item.checked).map((item) => item.name)

  if (filterValues.includes('all') || filterValues.length === 0) {
    return tickets
  }

  return tickets.filter((ticket) => {
    const stops = ticket.segments[0].stops.length
    const stops2 = ticket.segments[1].stops.length
    return stops === stops2 && filterValues.includes(String(stops))
  })
}

export { sortTickets, filterTickets }
