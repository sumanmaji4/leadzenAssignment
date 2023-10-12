import classes from './SingleUser.module.css'
import { Link } from 'react-router-dom'

function SingleUser({ user }) {
  console.log(user)
  return (
    <div className={classes.full_body}>
      <h1>Details of @{user.username}</h1>
      <div className={classes.firstRow}>
        <div className={classes.item}>
          <div className={classes.hed}>Username</div>
          <div className={classes.content}>{user.username}</div>
        </div>
        <div className={classes.item}>
          <div className={classes.hed}>Name</div>
          <div className={classes.content}>{user.name}</div>
        </div>
        <div className={classes.item}>
          <div className={classes.hed}>E - mail</div>
          <div className={classes.content}>{user.address.city}</div>
        </div>
      </div>

      <div className={classes.parent}>
        <div className={classes.child}>
          <div className={classes.subHead}>Address</div>
          <div className={classes.myBox}>
            <div className={classes.subHead2}>Street</div>
            <div className={classes.content}>{user.address.street}</div>
          </div>
          <div className={classes.myBox}>
            <div className={classes.subHead2}>City</div>
            <div className={classes.content}>{user.address.city}</div>
          </div>
          <div className={classes.myBox}>
            <div className={classes.subHead2}>Suite</div>
            <div className={classes.content}>{user.address.suite}</div>
          </div>
          <div className={classes.myBox}>
            <div className={classes.subHead2}>Zipcode</div>
            <div className={classes.content}>{user.address.zipcode}</div>
          </div>
          <div className={classes.myBox}>
            <div className={classes.subHead2}>Phone</div>
            <div className={classes.content}>{user.phone}</div>
          </div>
        </div>

        <div className={classes.child}>
          <div className={classes.subHead}>Company</div>
          <div className={classes.myBox}>
            <div className={classes.subHead2}>Name</div>
            <div className={classes.content}>{user.company.name}</div>
          </div>
          <div className={classes.myBox}>
            <div className={classes.subHead2}>CatchPhrase</div>
            <div className={classes.content}>{user.company.catchPhrase}</div>
          </div>
        </div>
      </div>

      <div className={classes.btn}>
        <Link to='/'>
          <button>Go to Home</button>
        </Link>
      </div>
    </div>
  )
}

export default SingleUser
