import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { setVisibleCount } from './ticketsButtonSlice.js'
import classes from './tickets-button.module.scss'

export default function TicketsButton() {
  const dispatch = useDispatch()

  return (
    <Button
      rootClassName={classes['ticket-list__btn']}
      variant="solid"
      onClick={() => dispatch(setVisibleCount())}
    >
      Показать еще 5 билетов!
    </Button>
  )
}