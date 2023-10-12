import classes from './UsersList.module.css'

import { Link } from 'react-router-dom'

function UsersList({ users }) {
  console.log(users)
  return (
    <div className={classes.full_body}>
      <h1>User List</h1>
      <ul className={classes.list}>
        {users.map((user) => (
          <li key={user.id} className={classes.allItem}>
            <div className={classes.item}>{user.username}</div>
            <div className={classes.item}>
              <div className={classes.hed}>NAME</div>
              <div className={classes.content}>{user.name}</div>
            </div>
            <div className={classes.item}>
              <div className={classes.hed}>CITY</div>
              <div className={classes.content}>{user.address.city}</div>
            </div>
            <div className={classes.item}>
              <Link to={`/user/${user.id}`}>
                <button>Show Details</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersList
