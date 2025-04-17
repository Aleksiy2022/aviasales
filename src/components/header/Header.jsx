import classes from './header.module.scss'
import logo from './images/Logo.svg'
import LoadProgress from '../load_progress/LoadProgress.jsx'

export default function Header() {
  return (
    <header className={classes.header}>
      <img src={logo} alt="Логотип компании" width={'82px'} height={'89px'} />
      <LoadProgress />
    </header>
  )
}
