require('dotenv').config()
const express = require('express')
const massive = require('massive')

const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()


app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('DB READY')
    app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))

})
