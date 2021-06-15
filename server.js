require('dotenv').config()
const express = require('express')
const chalk = require('chalk')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())


const posts = [
  {
    username: 'Kristen', 
    title: 'Post 1'
  },
   {
    username: 'Jim', 
    title: 'Post 2'
  }
]

app.get('/posts', (req, res) => {
  res.json(posts)
})


app.post('/login', (req, res) => {
  //Authenticate user
  const username = req.body.username
  const user = { name: username}

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  res.json({ accessToken })
})



app.listen(3000, () => {
  console.log(chalk.black.bgCyan('app listening on port 3000'))
})