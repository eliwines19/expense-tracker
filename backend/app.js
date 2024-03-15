const express = require('express')
const cors = require('cors');
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

// middlewares
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('hello world')
})

const server = () => {
    app.listen(PORT, () => {
        console.log('listening on port:', PORT)
    })
}

server()