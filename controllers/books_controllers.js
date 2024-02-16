const express = require('express')
const booksRouter = express.Router()
const Book = require('../models/books')

//INDEX
booksRouter.get('/', (req, res) => {
    console.log('Hello from the Book path!')
    res.send('Hello from the Book path!')
})

//books route
booksRouter.get('/books', (req, res) => {
    console.log('Books :)')
    res.send('Books :)')
})

module.exports = booksRouter