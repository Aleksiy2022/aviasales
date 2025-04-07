import { Checkbox, Flex } from 'antd'
import { useState } from 'react'

import classes from './transfer_filter.module.scss'

const transferOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
const defaultCheckedList = []

export default function TransferFilter() {
  const [checkedList, setCheckedList] = useState(defaultCheckedList)
  const checkAll = transferOptions.length === checkedList.length
  const indeterminate = checkedList.length > 0 && checkedList.length < transferOptions.length

  function handleChange(list) {
    setCheckedList(list)
  }

  function handleCheckAllChange(e) {
    setCheckedList(e.target.checked ? transferOptions : [])
  }

  return (
    <div className={classes['transfer-filter']}>
      <span className={classes['transfer-filter_title']}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <Checkbox indeterminate={indeterminate} onChange={handleCheckAllChange} checked={checkAll}>
        Все
      </Checkbox>
      <Checkbox.Group
        className={classes['checkbox-group']}
        options={transferOptions}
        value={checkedList}
        onChange={handleChange}
      >
        <Checkbox value="Not transfer">Без пересадок</Checkbox>
        <Checkbox value="1 transfer">1 пересадка</Checkbox>
        <Checkbox value="2 transfer">2 пересадки</Checkbox>
        <Checkbox value="3 transfer">3 пересадки</Checkbox>
      </Checkbox.Group>
    </div>
  )
}
