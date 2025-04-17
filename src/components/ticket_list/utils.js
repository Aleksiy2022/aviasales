function sortTickets(tickets, sortedValue) {
  const ticketsCopy = [...tickets]
  switch (sortedValue) {
    case 'price':
      return ticketsCopy.sort((a, b) => a.price - b.price)
    case 'duration':
      return ticketsCopy.sort(
        (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      )
  }
}

export { sortTickets }
