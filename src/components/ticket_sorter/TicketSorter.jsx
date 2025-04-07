import { useState } from 'react'

import classes from './ticket-sorter.module.scss'

const initialState = [
  { value: 'cheapest', text: 'Самый дешевый', active: true },
  { value: 'fastest', text: 'Самый быстрый', active: false },
  { value: 'optimal', text: 'Оптимальный', active: false },
]

export default function TicketSorter() {
  const [buttonsData, setButtonsData] = useState(initialState)

  function handleClick(evt, value) {
    evt.preventDefault()
    const newButtonsData = buttonsData.map((button) => {
      if (button.value === value) {
        return { ...button, active: true }
      }
      return { ...button, active: false }
    })
    setButtonsData(newButtonsData)
  }

  const buttons = buttonsData.map((item, index) => {
    return (
      <li key={index} className={`${classes['ticket-sorter__item']} ${item.active ? classes['active'] : null}`}>
        <button
          className={`${classes['btn-reset']} ${classes['ticket-sorter__btn']}`}
          onClick={(evt) => handleClick(evt, item.value)}
        >
          {item.text}
        </button>
      </li>
    )
  })

  return <ul className={`${classes['list-reset']} ${classes['ticket-sorter__list']}`}>{buttons}</ul>
}
