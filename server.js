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

app.get('/posts', auth, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
})


app.post('/login', (req, res) => {
  //Authenticate user
  const username = req.body.username
  const user = { name: username}
  console.log(user);

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  res.json({ accessToken })
})


function auth(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  
  if(!token) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if(err) return res.sendStatus(403)
    req.user = user
    next()
  })

}


app.listen(3000, () => {
  console.log(chalk.black.bgCyan('app listening on port 3000'))
})