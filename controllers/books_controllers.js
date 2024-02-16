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

booksRouter.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(deleteBook => {
            res.render("Deleted")
        })
})

//SHOW
booksRouter.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(foundBook => {
            if( !foundBook) {
                return res.status(404).json({error: "Book not found"});
            }
            res.json(foundBook)
            })
        .catch(err => {
            console.error("Error finding book:", err);
            res.status(500).json({error: "Internal server error"})
        })
})

//EDIT
booksRouter.get('/:id', (req, res) => {
    Book.find()
        .then(foundBook => {
            Book.findById(req.params.id)
                .then(foundBook => {
                    res.json(Book)
            })
        })
})

booksRouter.post('/books', (req, res) => {
    Book.create(req.body)
    res.redirect('/books')
})

module.exports = booksRouter