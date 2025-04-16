import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { apiSlice } from './apiSlice'

function sortData(data, sortedValue) {
  switch (sortedValue) {
    case 'price':
      return data.ids.sort((a, b) => data.entities[a].price - data.entities[b].price)
    case 'duration':
      return data.ids.sort(
        (a, b) =>
          (data.entities[a].segments[0].duration +
            data.entities[a].segments[1].duration) -
          (data.entities[b].segments[0].duration +
            data.entities[b].segments[1].duration)
      )
  }
}

export function useLoadAllTickets(searchId, tickets, stop, sortedValue) {
  const dispatch = useDispatch()

  useEffect(() => {
    if (searchId && !stop) {
      load()
    }

    async function load() {
      let isGetTickets = false
      let max_retries = 10
      while (!isGetTickets && max_retries > 0) {
        try {
          const { error } = await dispatch(apiSlice.endpoints.getTickets.initiate(searchId, { forceRefetch: true }))
          if (!error) {
            isGetTickets = true
            dispatch(
              apiSlice.util.updateQueryData('getTickets', searchId, (draft) => {
                draft.ids.push(...tickets.ids)
                draft.entities = { ...draft.entities, ...tickets.entities }
                draft.ids = sortData(draft, sortedValue)
              })
            )
          } else {
            max_retries--
          }
        } catch (err) {
          throw err
        }
      }
    }
  }, [searchId, tickets])
}
