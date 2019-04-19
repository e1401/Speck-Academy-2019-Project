//postgres


const { Pool, Client } = require('pg')

const pool = new Pool({
    user: 'antonioha',
    host: '138.68.87.73',
    database: 'db_antonioha',
    password: '#4Z?my@8',
    port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  user: 'antonioha',
  host: '138.68.87.73',
  database: 'db_antonioha',
  password: '#4Z?my@8',
  port: 5432,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})