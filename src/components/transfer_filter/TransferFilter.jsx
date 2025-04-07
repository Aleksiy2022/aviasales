import { useState } from 'react'

import classes from './transfer_filter.module.scss'

const transferOptionLabels = [
  { name: 'all', value: 'Все' },
  { name: 'without', value: 'Без пересадок' },
  { name: 'one', value: '1 пересадка' },
  { name: 'two', value: '2 пересадки' },
  { name: 'three', value: '3 пересадки' },
]

export default function TransferFilter() {
  const [checkedStatus, setCheckedStatus] = useState(
    transferOptionLabels.map((item) => {
      return {
        name: item.name,
        checked: false,
      }
    })
  )

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

  const transferOptions = transferOptionLabels.map((label, index) => {
    const currentInputItem = checkedStatus.find((item) => item.name === label.name)
    return (
      <li key={index}>
        <label className={classes['transfer-filter_label']}>
          <input
            name={label.name}
            type="checkbox"
            className={classes['transfer-filter_checkbox']}
            checked={currentInputItem.checked}
            onChange={handleChange}
          />
          <span className={classes['transfer-filter_custom-checkbox']}></span>
          <span>{label.value}</span>
        </label>
      </li>
    )
  })

  return (
    <form className={classes['transfer-filter']}>
      <span className={classes['transfer-filter_title']}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <ul className={`${classes['list-reset']} ${classes['transfer-filter_list']}`}>{transferOptions}</ul>
    </form>
  )
}
