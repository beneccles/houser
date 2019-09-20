require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller.js')
const { SERVER_PORT, CONNECTION_STRING } = process.env

// Connect the server
const app = express()


app.use(express.json())

app.get('/api/houses', ctrl.getHouses)
app.post('/api/house', ctrl.addHouse)
app.delete('/api/house/:id', ctrl.deleteHouse)

// Lets get the database connected!
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} on Station!`))
})