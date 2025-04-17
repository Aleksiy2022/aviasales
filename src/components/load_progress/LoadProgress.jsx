import { Progress } from 'antd'
import { apiSlice } from '../redux/apiSlice.js'
import { twoColors } from './styleLoadProgress.js'
import classes from './load-progress.module.scss'

const calculatePercent = (ticketsData) => {
  if (!ticketsData) return 0
  if (ticketsData.stop) return 100
  return Math.floor((ticketsData.tickets.length / 11000) * 100)
}

export default function LoadProgress() {
  const { data: searchId } = apiSlice.endpoints.getSearchId.useQueryState()
  const { data: ticketsData } = apiSlice.endpoints.getTickets.useQueryState(searchId?.searchId)
  const percent = calculatePercent(ticketsData)

  return (
    <Progress
      rootClassName={classes['load-progress']}
      type="line"
      percent={percent}
      strokeColor={twoColors}
      percentPosition={{ align: 'center', type: 'inner' }}
      size={{ height: 20 }}
    />
  )
}
