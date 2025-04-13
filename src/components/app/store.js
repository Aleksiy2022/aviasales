import { configureStore, combineSlices } from '@reduxjs/toolkit'
import transferFilterSlice from '../transfer_filter/transferFilterSlice.js'
import ticketSorterSlice from '../ticket_sorter/ticketSorterSlice.js'

const rootReducer = combineSlices(transferFilterSlice, ticketSorterSlice)

export const store = configureStore({
  reducer: rootReducer,
})
