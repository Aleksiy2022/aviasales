import { Radio } from 'antd'
import classes from './ticket-sorter.module.scss'
import { setCurrentSortedValue, selectOptionTicketSorter, selectCurrentSortedValue } from './ticketSorterSlice.js'
import { useSelector, useDispatch } from 'react-redux'

export default function TicketSorter() {
  const dispatch = useDispatch()
  const optionsTicketSorter = useSelector(selectOptionTicketSorter)
  const currentSortedValue = useSelector(selectCurrentSortedValue)

  function handleChange(e) {
    dispatch(setCurrentSortedValue({ value: e.target.value }))
  }

  return (
    <Radio.Group
      block
      value={currentSortedValue}
      options={optionsTicketSorter}
      optionType="button"
      buttonStyle="solid"
      rootClassName={classes['radio-group']}
      onChange={handleChange}
    />
  )
}
