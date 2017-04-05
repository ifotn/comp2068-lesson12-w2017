"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by RFreeman on 3/29/2017.
 */
var core_1 = require("@angular/core");
var book_service_1 = require("../services/book.service");
var BookComponent = (function () {
    // constructor
    function BookComponent(bookService) {
        this.bookService = bookService;
        // call get as soon as component is instantiated
        this.getBooks();
    }
    // get all books from our service
    BookComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks().subscribe(function (response) {
            _this.books = response;
        });
    };
    // add a new book
    BookComponent.prototype.addBook = function () {
        var _this = this;
        // instantiate new book object
        var newBook = {
            title: this.title,
            year: this.year,
            author: this.author
        };
        // call the book service add method
        this.bookService.addBook(newBook).subscribe(function (response) {
            console.log('Success ' + response);
            _this.books.push(newBook);
            _this.clearForm();
        });
    };
    // clear form
    BookComponent.prototype.clearForm = function () {
        this.title = null;
        this.year = null;
        this.author = null;
    };
    // select book to be edited
    BookComponent.prototype.selectBook = function (_id) {
        var _this = this;
        this.bookService.selectBook(_id).subscribe(function (response) {
            _this._id = response._id,
                _this.title = response.title,
                _this.year = response.year,
                _this.author = response.author;
        });
    };
    return BookComponent;
}());
BookComponent = __decorate([
    core_1.Component({
        selector: 'book',
        templateUrl: '../views/books.html',
        providers: [book_service_1.BookService],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookComponent);
exports.BookComponent = BookComponent;
//# sourceMappingURL=book.component.js.map