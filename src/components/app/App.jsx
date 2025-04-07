import Header from '../header/Header.jsx'
import LeftSider from '../left_sider/LeftSider.jsx'
import TicketSorter from '../ticket_sorter/TicketSorter.jsx'

import classes from './app.module.scss'

export default function App() {
  return (
    <div className={classes['aviasales']}>
      <Header />
      <main className={classes['aviasales__main']}>
        <LeftSider />
        <section className={classes['tickets-section']}>
          <TicketSorter />
        </section>
      </main>
    </div>
  )
}
