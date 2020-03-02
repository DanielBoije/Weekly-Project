const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('../queries')
const router = express.Router()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
router.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

router.get('/users', db.getUsers)

router.get('/users/:id', db.getUserById)

router.post('/users', db.createUser)

router.put('/users/:id', db.updateUser)

router.delete('/users/:id', db.deleteUser)

module.exports = router;