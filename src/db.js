const { Pool } = require ('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'shaq5656',
    host: 'localhost',
    port:  5432,
    database: 'taskdb'
});

module.exports = pool;