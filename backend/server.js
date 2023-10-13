import express from 'express'
import userRoutes from './routes/userRoutes.js'

const port = 8080

const app = express()

app.use((req, res, next) => {
  // to prevent CORS error
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  next()
})

app.use('/api', userRoutes)

//error handling middleware
app.use((error, req, res, next) => {
  // console.log(error)
  const status = error.statusCode || 500
  const message = error.message
  const data = error.data
  res.status(status).json({ message: message, data: data })
})

app.listen(port, () => console.log('server is running...'))
