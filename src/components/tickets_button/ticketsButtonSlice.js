import { createSlice } from '@reduxjs/toolkit'

const initialState = { visibleCount: 5 }

const ticketsButtonSlice = createSlice({
  name: 'ticketsButton',
  initialState,
  reducers: (create) => ({
    setVisibleCount: create.reducer((state) => {
      state.visibleCount = state.visibleCount + 5
    }),
  }),
  selectors: {
    selectVisibleCount: (state) => state.visibleCount,
  },
})

export default ticketsButtonSlice
export const { setVisibleCount } = ticketsButtonSlice.actions
export const { selectVisibleCount } = ticketsButtonSlice.selectors
