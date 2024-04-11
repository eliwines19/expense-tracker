const mongoose = require('mongoose')

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.MONGO_URL)
        console.log('db connected')
    } catch (error) {
        console.log('db connection failed', error)
    }
}

module.exports = { db }