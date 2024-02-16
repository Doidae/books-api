const express = require('express')
const booksRouter = express.Router()
const Book = require('../models/books')

//INDEX
booksRouter.get('/', async (req, res) => {
    // console.log('Hello from the Book path!')
    // res.send('Hello from the Book path!')
    try {
        const books = await Book.find();
        res.json(books)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error"})
    }
})

//books route
booksRouter.get('/books', (req, res) => {
    console.log('Books :)')
    res.json(Book)
})

booksRouter.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(foundBook => {
            res.render('show', {
                book: foundBook
            })
        })
})

module.exports = booksRouter