import { createAppSlice } from '../app/createAppSlice.js'

const initialState = {
  options: [
    { value: 'cheapest', label: 'Самый дешевый' },
    { value: 'fastest', label: 'Самый быстрый' },
    { value: 'optimal', label: 'Оптимальный' },
  ],
  currentSortedValue: 'cheapest'
}

const ticketSorterSlice = createAppSlice({
  name: 'ticketSorter',
  initialState,
  reducers: (create) => ({
    setCurrentSortedValue: create.reducer((state, actions) => {
      const { value } = actions.payload;
      state.currentSortedValue = value;
    })
  }),
  selectors: {
    selectOptionTicketSorter: (state) => state.options,
    selectCurrentSortedValue: (state) => state.currentSortedValue,
  }
})

export default ticketSorterSlice
export const { setCurrentSortedValue } = ticketSorterSlice.actions
export const { selectOptionTicketSorter, selectCurrentSortedValue } = ticketSorterSlice.selectors
