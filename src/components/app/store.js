import { configureStore, combineSlices } from '@reduxjs/toolkit'
import transferFilterSlice from '../transfer_filter/transferFilterSlice.js'
import ticketSorterSlice from '../ticket_sorter/ticketSorterSlice.js'
import ticketListSlice from '../ticket_list/ticketListSlice.js'

const rootReducer = combineSlices(transferFilterSlice, ticketSorterSlice, ticketListSlice)

export const store = configureStore({
  reducer: rootReducer,
})
