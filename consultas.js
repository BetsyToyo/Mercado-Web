const {Pool} = require('pg')
const pool = new Pool({
    user:'postgres',
    password:'leoney31',
    host:'localhost',
    port: 5432,
    database:'mercado-web'
})


