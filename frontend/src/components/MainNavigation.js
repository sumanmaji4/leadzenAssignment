import { useState } from 'react'
import classes from './MainNavigation.module.css'
import { NavLink } from 'react-router-dom'

function MainNavigation({ handleChange }) {
  const [input, setInput] = useState('')

  const setSearch = (value) => {
    setInput(value)
    handleChange(value)
  }

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
          <li>
            <input
              placeholder='search by name...'
              value={input}
              onChange={(e) => setSearch(e.target.value)}
            />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
