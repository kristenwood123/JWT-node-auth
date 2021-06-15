const express = require('express')
const chalk = require('chalk')
const app = express()
const bcrypt = require('bcrypt')
app.use(express.json())

const users = []

// const posts = [
//   {
//     username: 'Kristen', 
//     title: 'Post 1'
//   },
//    {
//     username: 'Jim', 
//     title: 'Post 2'
//   }
// ]

// app.get('/posts', (req, res) => {
//   res.json(posts)
// })



app.post('/users', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    console.log(salt, hashedPassword);

    const user = {name: req.body.name, password: hashedPassword} 
    
    users.push(user)
    res.status(201).send(users)
  }
  catch(e) {
    res.status(500).send()
  }
})



app.get('/login', (req, res) => {
  //Authenticate
})

app.listen(3000, () => {
  console.log(chalk.black.bgCyan('app listening on port 3000'))
})