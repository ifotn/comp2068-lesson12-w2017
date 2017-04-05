/**
 * Created by RFreeman on 3/29/2017.
 */
let express = require('express');
let router = express.Router();

// link to the book model for CRUD
let Book = require('../models/book');

router.get('/', function (req, res, next) {
    Book.find(function (err, books) {
       if (err) {
           return res.send(err).status(501);
       }

       // just send json response, no need to call any view
       res.json(books);
    });
});

// POST - save a new book
router.post('/', function (req, res, next) {
    let newBook = new Book(req.body);

    newBook.save(function (err, book) {
       if (err) {
           console.log(err);
           return res.send(err).status(501);
       }
       res.json(book).status(201);
    });
});

module.exports = router;

