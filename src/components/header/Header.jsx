import classes from './header.module.scss'
import logo from './images/Logo.png'

export default function Header() {
  return (
    <header className={classes.header}>
      <img src={logo} alt="Логотип компании" />
    </header>
  )
}
