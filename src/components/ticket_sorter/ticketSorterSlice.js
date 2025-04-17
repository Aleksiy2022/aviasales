import { createAppSlice } from '../redux/createAppSlice.js'

const initialState = {
  options: [
    { value: 'price', label: 'Самый дешевый' },
    { value: 'duration', label: 'Самый быстрый' },
    { value: 'optimal', label: 'Оптимальный' },
  ],
  currentSortedValue: 'price',
}

const ticketSorterSlice = createAppSlice({
  name: 'ticketSorter',
  initialState,
  reducers: (create) => ({
    setCurrentSortedValue: create.reducer((state, actions) => {
      const { value } = actions.payload
      state.currentSortedValue = value
    }),
  }),
  selectors: {
    selectOptionTicketSorter: (state) => state.options,
    selectCurrentSortedValue: (state) => state.currentSortedValue,
  },
})

export default ticketSorterSlice
export const { setCurrentSortedValue } = ticketSorterSlice.actions
export const { selectOptionTicketSorter, selectCurrentSortedValue } = ticketSorterSlice.selectors
