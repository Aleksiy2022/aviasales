import { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { apiSlice } from './apiSlice.js'

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function useLoadAllTickets(searchId, ticketsData) {
  const dispatch = useDispatch()
  const load = useCallback(async () => {
    let retries = 5
    let delay = 500

    while (retries > 0) {
      const { error } = await dispatch(apiSlice.endpoints.getTickets.initiate(searchId, { forceRefetch: true }))
      if (!error) break
      retries--
      await sleep(delay)
      delay += 500
    }
  }, [dispatch, searchId])

  useEffect(() => {
    if (searchId) {
      load()
    }
  }, [searchId, ticketsData])
}

export { useLoadAllTickets }
export const { useGetSearchIdQuery, useGetTicketsQuery } = apiSlice
