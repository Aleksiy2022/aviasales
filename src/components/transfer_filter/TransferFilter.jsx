import classes from './transfer_filter.module.scss'
import { toggleAllChecked, toggleChecked, selectTransferFilterData } from './transferFilterSlice.js'
import { useDispatch, useSelector } from 'react-redux'

export default function TransferFilter() {
  const transferFilter = useSelector(selectTransferFilterData)
  const dispatch = useDispatch()

  function handleChange(evt) {
    if (evt.target.name === 'all') {
      dispatch(toggleAllChecked())
    }
    dispatch(toggleChecked({ checkboxInputName: evt.target.name }))
  }

  const transferOptions = transferFilter.map((label, index) => {
    return (
      <li key={index}>
        <label className={classes['transfer-filter__label']}>
          <input
            name={label.name}
            type="checkbox"
            className={classes['transfer-filter__checkbox']}
            checked={label.checked}
            onChange={handleChange}
          />
          <span className={classes['transfer-filter__custom-checkbox']}></span>
          <span>{label.value}</span>
        </label>
      </li>
    )
  })

  return (
    <form className={classes['transfer-filter']}>
      <span className={classes['transfer-filter__title']}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <ul className={`${classes['list-reset']} ${classes['transfer-filter__list']}`}>{transferOptions}</ul>
    </form>
  )
}
