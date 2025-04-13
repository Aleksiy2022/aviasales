import Header from '../header/Header.jsx'
import LeftSider from '../left_sider/LeftSider.jsx'
import TicketSorter from '../ticket_sorter/TicketSorter.jsx'
import TicketList from '../ticket_list/TicketList.jsx'
import { ConfigProvider } from 'antd'

import classes from './app.module.scss'
import { theme } from './antdTheme.js'

export default function App() {
  return (
    <ConfigProvider theme={theme}>
      <div className={classes['aviasales']}>
        <Header />
        <main className={classes['aviasales__main']}>
          <LeftSider />
          <section className={classes['tickets-section']}>
            <TicketSorter />
            <TicketList/>
          </section>
        </main>
      </div>
    </ConfigProvider>
  )
}
