function sortTickets(tickets, sortedValue) {
  const ticketsCopy = [...tickets]
  if (sortedValue === 'price') {
    return ticketsCopy.sort((a, b) => a.price - b.price)
  }
  if (sortedValue === 'duration') {
    const getDuration = t => t.segments[0].duration + t.segments[1].duration
    return ticketsCopy.sort((a, b) => getDuration(a) - getDuration(b))
  }
  return ticketsCopy
}

function filterTickets(tickets, transferFilter) {
  const filterValues = transferFilter
    .filter(item => item.checked)
    .map(item => item.name)

  if (filterValues.includes('all') || filterValues.length === 0) {
    return tickets
  }

  return tickets.filter(ticket => {
    const stops = ticket.segments[0].stops.length
    const stops2 = ticket.segments[1].stops.length
    return stops === stops2 && filterValues.includes(String(stops))
  })
}

export { sortTickets, filterTickets }