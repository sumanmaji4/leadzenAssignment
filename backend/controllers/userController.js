import pkg from 'body-parser'
const { json } = pkg
import fetch from 'node-fetch'

//@desc
//@route
//@access
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
    // ekhane "throw err" korle next middleware e pouchabe na
    next(err)
  }
}

// exports.getUsers = async (req, res, next) => {
//   const currentPage = req.query.page || 1
//   const perPage = 2

//   try {
//     const totalItems = await Post.find().countDocuments()

//     const posts = await Post.find()
//       .populate('creator')
//       .sort({ createdAt: -1 })
//       .skip((currentPage - 1) * perPage)
//       .limit(perPage)

//     res.status(200).json({
//       message: 'Fetched posts successfully',
//       posts: posts,
//       totalItems: totalItems,
//     })
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500
//     }
//     // ekhane "throw err" korle next middleware e pouchabe na
//     next(err)
//   }
// }

const getUserById = async (req, res, next) => {
  //   console.log(req.originalUrl)
  const userId = req.params.userId
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    let users = await response.json()

    const user = users.filter((curr) => curr.id == userId)
    // console.log(user)

    if (!user.length) res.status(200).json({ message: 'user not found' })

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
