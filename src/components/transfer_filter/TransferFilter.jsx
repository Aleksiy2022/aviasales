import { useState } from 'react'

import classes from './transfer_filter.module.scss'

const initialState = [
  { name: 'all', value: 'Все', checked: false },
  { name: 'without', value: 'Без пересадок', checked: false },
  { name: 'one', value: '1 пересадка', checked: false },
  { name: 'two', value: '2 пересадки', checked: false },
  { name: 'three', value: '3 пересадки', checked: false },
]

export default function TransferFilter() {
  const [checkedStatus, setCheckedStatus] = useState(initialState)

  function handleChange(evt) {
    let allInputChecked = null
    if (evt.target.name === 'all') {
      allInputChecked = checkedStatus.find((item) => item.name === 'all').checked
    }
    const newCheckedStatus = checkedStatus.map((item) => {
      if (evt.target.name === 'all') {
        return { ...item, checked: !allInputChecked }
      }
      if (evt.target.name === item.name) {
        return { ...item, checked: !item.checked }
      }
      return item
    })
    setCheckedStatus(newCheckedStatus)
  }

  const transferOptions = checkedStatus.map((label, index) => {
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
