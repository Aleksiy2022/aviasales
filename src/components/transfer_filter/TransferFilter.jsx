import classes from './transfer_filter.module.scss'
import { toggleAllChecked, toggleChecked, selectTransferFilterData } from './transferFilterSlice.js'
import { useDispatch, useSelector } from 'react-redux'

export default function TransferFilter() {
  const transferFilter = useSelector(selectTransferFilterData)
  const dispatch = useDispatch()

  const handleChange = (evt) => {
    const name = evt.target.name
    if (name === 'all') {
      dispatch(toggleAllChecked())
    } else {
      dispatch(toggleChecked({ checkboxInputName: name }))
    }
  }

  return (
    <form className={classes['transfer-filter']}>
      <span className={classes['transfer-filter__title']}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <ul className={`${classes['list-reset']} ${classes['transfer-filter__list']}`}>
        {transferFilter.map(({ name, value, checked }) => (
          <li key={name}>
            <label className={classes['transfer-filter__label']}>
              <input
                name={name}
                type="checkbox"
                className={classes['transfer-filter__checkbox']}
                checked={checked}
                onChange={handleChange}
              />
              <span className={classes['transfer-filter__custom-checkbox']}></span>
              <span>{value}</span>
            </label>
          </li>
        ))}
      </ul>
    </form>
  )
}
