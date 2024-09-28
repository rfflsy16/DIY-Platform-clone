const {Pool} = require('pg')
let pool = new Pool({
    user : 'rafflesyohanes',
    password: 'postgres',
    host : 'localhost',
    port: 5432,
    database: 'DIYPlatform',
    idleTimeoutMillis: 500
})
// console.log(pool)

module.exports = pool