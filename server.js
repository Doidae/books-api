const express = require('express')


require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.get('/', (req,res) => {
    console.log('Hello from the main path!')
    res.send('Hello from the main path!')
})

const booksController = require('./controllers/books_controllers.js')
app.use('/books',booksController)

app.listen(PORT, () => {
    console.log('listening on port', PORT);
})

