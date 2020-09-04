require('dotenv').config()
const express = require('express')
const massive = require('massive')
const invCtrl = require('./controller.js')

const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()


app.use(express.json())

app.get('/api/inventory', invCtrl.getInventory)
app.post('/api/product', invCtrl.addProduct)
app.delete('/api/product/:id', invCtrl.deleteProduct)

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
