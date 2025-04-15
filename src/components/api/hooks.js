import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { apiSlice } from './apiSlice'

export function useLoadAllTickets(searchId, tickets, stop) {
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
          const { data, error } = await dispatch(
            apiSlice.endpoints.getTickets.initiate(searchId, { forceRefetch: true })
          )
          if (!error) {
            isGetTickets = true
            dispatch(
              apiSlice.util.updateQueryData('getTickets', searchId, (draft) => {
                draft.tickets.push(...tickets)
                draft.stop = data.stop
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
