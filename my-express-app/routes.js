// 4 main HTTP Methods of routes [Get, Post, Put, Delete]

const express = require('express');
const router = express.Router();

// Dummy data
let books = [
  { id: 1, title: "Atomic Habits" },
  { id: 2, title: "Deep Work" }
];

// GET - Read all books
router.get('/', (req, res) => {
  res.json(books);
});

// POST - Add a new book
router.post('/', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT - Update an existing book
router.put('/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).json({ msg: "Book not found" });

  book.title = req.body.title;
  res.json(book);
});

// DELETE - Remove a book
router.delete('/:id', (req, res) => {
  books = books.filter(b => b.id != req.params.id);
  res.json({ msg: "Book deleted" });
});


module.exports = router;
