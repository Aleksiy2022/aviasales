import { Radio, ConfigProvider } from 'antd'
import classes from './ticket-sorter.module.scss'
import { theme } from './antdTheme.js'

const options = [
  { value: 'cheapest', label: 'Самый дешевый' },
  { value: 'fastest', label: 'Самый быстрый' },
  { value: 'optimal', label: 'Оптимальный' },
]

export default function TicketSorter() {
  function handleChange(e) {
    console.log(e.target.value)
  }

  return (
    <ConfigProvider theme={theme}>
      <Radio.Group
        block
        options={options}
        optionType="button"
        buttonStyle="solid"
        rootClassName={classes['radio-group']}
        onChange={handleChange}
      />
    </ConfigProvider>
  )
}
