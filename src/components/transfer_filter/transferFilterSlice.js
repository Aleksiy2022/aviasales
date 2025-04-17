import { createAppSlice } from '../app/createAppSlice.js'

const initialState = [
  { name: 'all', value: 'Все', checked: false },
  { name: 'without', value: 'Без пересадок', checked: false },
  { name: 'one', value: '1 пересадка', checked: false },
  { name: 'two', value: '2 пересадки', checked: false },
  { name: 'three', value: '3 пересадки', checked: false },
]

function areAllChecked(state) {
  return state.filter((item) => item.name !== 'all').every((item) => item.checked)
}

const transferFilterSlice = createAppSlice({
  name: 'transferFilter',
  initialState,
  reducers: (create) => ({
    toggleAllChecked: create.reducer((state) => {
      const allCheckedNext = !state.find((item) => item.name === 'all').checked
      state.forEach((item) => {
        item.checked = allCheckedNext
      })
    }),
    toggleChecked: create.reducer((state, action) => {
      const name = action.payload.checkboxInputName
      const changed = state.find((item) => item.name === name)
      if (changed) changed.checked = !changed.checked
      const all = state.find((item) => item.name === 'all')
      if (all) all.checked = areAllChecked(state)
    }),
  }),
  selectors: {
    selectTransferFilterData: (state) => state,
  },
})

export default transferFilterSlice
export const { toggleAllChecked, toggleChecked } = transferFilterSlice.actions
export const { selectTransferFilterData } = transferFilterSlice.selectors
