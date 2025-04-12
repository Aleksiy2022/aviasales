import { createAppSlice } from '../app/createAppSlice.js'

const initialState = [
  { name: 'all', value: 'Все', checked: false },
  { name: 'without', value: 'Без пересадок', checked: false },
  { name: 'one', value: '1 пересадка', checked: false },
  { name: 'two', value: '2 пересадки', checked: false },
  { name: 'three', value: '3 пересадки', checked: false },
]

const transferFilterSlice = createAppSlice({
  name: 'transferFilter',
  initialState,
  reducers: (create) => ({
    toggleAllChecked: create.reducer((state) => {
      const allChecked = state.find((item) => item.name === 'all')
      if (allChecked) {
        const newCheckedStatus = !allChecked.checked
        state.forEach((item) => {
          item.checked = newCheckedStatus
        })
      }
    }),
    toggleChecked: create.reducer((state, action) => {
      const { checkboxInputName } = action.payload
      const checkboxInput = state.find((item) => item.name === checkboxInputName)
      if (checkboxInput) {
        checkboxInput.checked = !checkboxInput.checked
      }
      const checkboxInputs = state.filter((item) => item.name !== 'all').every((item) => item.checked)

      const allCheckboxInput = state.find((item) => item.name === 'all')
      if (allCheckboxInput) {
        allCheckboxInput.checked = checkboxInputs
      }
    }),
  }),
  selectors: {
    selectTransferFilterData: (state) => state,
  },
})

export default transferFilterSlice
export const { toggleAllChecked, toggleChecked } = transferFilterSlice.actions
export const { selectTransferFilterData } = transferFilterSlice.selectors
