const express = require('express')
const chalk = require('chalk')
const app = express()

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


app.listen(3000, () => {
  console.log(chalk.black.bgCyan('app listening on port 3000'))
})