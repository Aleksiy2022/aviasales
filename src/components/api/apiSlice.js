import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { v4 as uuidv4 } from 'uuid'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://aviasales-test-api.kata.academy' }),
  endpoints: (builder) => ({
    getSearchId: builder.query({
      query: () => '/search',
    }),
    getTickets: builder.query({
      query: (searchId) => `/tickets?searchId=${searchId}`,
      transformResponse: (response) => {
        const ticketsWithId = response.tickets.map((ticket) => ({
          id: uuidv4(),
          ...ticket,
        }))
        return {
          tickets: ticketsWithId,
          stop: response.stop,
        }
      },
    }),
  }),
})

export const { useGetSearchIdQuery, useGetTicketsQuery } = apiSlice
