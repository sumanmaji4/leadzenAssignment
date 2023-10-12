import classes from './MainNavigation.module.css'
import { NavLink } from 'react-router-dom'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? classes.active : '')}
              end='true'
            >
              Home
            </NavLink>
          </li>
          <li>Search</li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
