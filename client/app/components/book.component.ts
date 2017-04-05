/**
 * Created by RFreeman on 3/29/2017.
 */
import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import {responseInterceptor} from "angular-in-memory-web-api";

@Component({
    selector: 'book',
    templateUrl: '../views/books.html',
    providers: [ BookService ],
    moduleId: module.id
})

export class BookComponent {
    _id: string;
    title: string;
    author: string;
    year: number;
    price: number;
    books: Array<any>;

    // constructor
    constructor(private bookService: BookService) {
        // call get as soon as component is instantiated
        this.getBooks();
    }

    // get all books from our service
    getBooks() {
        this.bookService.getBooks().subscribe(response => {
            this.books = response;
        });
    }

    // add a new book
    addBook() {
        // instantiate new book object
        let newBook = {
            title: this.title,
            year: this.year,
            author: this.author
        };

        // call the book service add method
        this.bookService.addBook(newBook).subscribe(response => {
            console.log('Success ' + response)
            this.books.push(newBook);
            this.clearForm();
        })
    }

    // clear form
    clearForm() {
        this._id = null;
        this.title = null;
        this.year = null;
        this.author = null;
    }

    // select book to be edited
    selectBook(book) {
        this._id = book._id,
            this.title = book.title,
            this.year = book.year,
            this.author = book.author
        /*this.bookService.selectBook(_id).subscribe(response => {
           this._id = response._id,
           this.title = response.title,
           this.year = response.year,
           this.author = response.author
        }); */
    }

    // update book
    updateBook() {
        let book = {
            _id: this._id,
            title: this.title,
            year: this.year,
            author: this.author
        }

        this.bookService.updateBook(book).subscribe(response => {
            this.clearForm();
            this.getBooks();
        });
    }

    // delete
    deleteBook(_id) {
        if (confirm('Are you sure???')) {
            this.bookService.deleteBook(_id).subscribe(response => {
                this.getBooks();
            });
        }
    }

}
