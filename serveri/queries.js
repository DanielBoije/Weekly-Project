require('dotenv').config();
const user = process.env.PGUSER;
const password = process.env.PGPASSWORD;

const {Pool} = require('pg')
const pool = new Pool({
  user: user,
  host: 'localhost',
  database: 'viikkoprojekti',
  password: password,
  //port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM topic ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM topic WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
  }

const createUser = (request, response) => {
    const { title, description, timetomaster, startlearningdate, inprogress } = request.body
  
    pool.query('INSERT INTO topic (title, description, timetomaster, startlearningdate, inprogress) VALUES ($1, $2, $3, $4, $5)', [title, description, timetomaster, startlearningdate, inprogress], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Title added with ID: ${results.insertId}`)
    })
  }

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { title, description } = request.body
  
    pool.query(
      'UPDATE topic SET title = $1, description = $2 WHERE id = $3',
      [title, description, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Title modified with ID: ${id}`)
      }
    )
  }

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM topic WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Title deleted with ID: ${id}`)
    })
  }

  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }