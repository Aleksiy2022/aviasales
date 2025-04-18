import { configureStore, combineReducers } from '@reduxjs/toolkit'
import transferFilterSlice from '../transfer_filter/transferFilterSlice.js'
import ticketSorterSlice from '../ticket_sorter/ticketSorterSlice.js'
import ticketsButtonSlice from '../tickets_button/ticketsButtonSlice.js'
import { apiSlice } from './apiSlice.js'

const rootReducer = combineReducers({
  transferFilter: transferFilterSlice.reducer,
  ticketSorter: ticketSorterSlice.reducer,
  ticketsButton: ticketsButtonSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})
