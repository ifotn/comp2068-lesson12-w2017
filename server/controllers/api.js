/**
 * Created by RFreeman on 3/29/2017.
 */
let express = require('express');
let router = express.Router();

// link to the book model for CRUD
let Book = require('../models/book');

router.get('/', (req, res) => {
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

// GET - select single book
router.get('/:_id', function(req, res, next) {
   Book.findOne({ _id: req.params._id }, function (err, book) {
      if (err) {
          console.log(err);
          return res.send(err).status(501);
      }
      res.json(book).status(200);
   });
});

// PUT - update selected book
router.put('/:_id', function (req, res, next) {
    Book.update({ _id: req.params._id }, req.body, function (err, book) {
        if (err) {
            console.log(err);
            return res.send(err).status(501);
        }
        res.json(book).status(200);
    });
});

// DELETE
router.delete('/:_id', function (req, res, next) {
    Book.remove({ _id: req.params._id }, function (err, book) {
        if (err) {
            console.log(err);
            return res.send(err).status(501);
        }
        res.json(book).status(200);
    });
});

module.exports = router;

