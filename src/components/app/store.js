import { configureStore, combineSlices } from '@reduxjs/toolkit'
import transferFilterSlice from '../transfer_filter/transferFilterSlice.js'

const rootReducer = combineSlices(transferFilterSlice)

export const store = configureStore({
  reducer: rootReducer,
})
