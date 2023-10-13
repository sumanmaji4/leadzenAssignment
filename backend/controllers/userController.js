import pkg from 'body-parser'
const { json } = pkg
import fetch from 'node-fetch'

// api to get all users
const getUsers = async (req, res, next) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    let users = await response.json()
    const totalItems = users.length

    // console.log(users)

    res.status(200).json({
      message: 'Fetched users successfully',
      users: users,
      totalItems: totalItems,
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }

    next(err)
  }
}

// api to get single user by id
const getUserById = async (req, res, next) => {
  //   console.log(req.originalUrl)
  const userId = req.params.userId
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    let users = await response.json()

    const user = users.filter((curr) => curr.id == userId)
    // console.log(user)

    if (!user.length) res.status(404).json({ message: 'user not found' })

    res.status(200).json({ message: 'Post fetched.', user: user })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

const test = async (req, res, next) => {
  //   console.log('originalUrl: ' + req.originalUrl)
  res.json('api')
}

export { getUserById, getUsers, test }
