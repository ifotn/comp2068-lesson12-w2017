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
// dependencies
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var BookService = (function () {
    function BookService(http) {
        this.http = http;
    }
    // get
    BookService.prototype.getBooks = function () {
        return this.http.get('/api').map(function (response) { return response.json(); });
    };
    // post
    BookService.prototype.addBook = function (newBook) {
        // set the headers as json
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        // call the post method of our server api
        return this.http.post('/api', JSON.stringify(newBook), { headers: headers }).map(function (response) { return response.json(); });
    };
    // select one
    BookService.prototype.selectBook = function (_id) {
        return this.http.get('/api/' + _id).map(function (response) { return response.json(); });
    };
    // update
    BookService.prototype.updateBook = function (book) {
        // set the headers as json
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        // call the http put method for update
        return this.http.put('/api/' + book._id, JSON.stringify(book), { headers: headers }).map(function (response) { return response.json(); });
    };
    // delete
    BookService.prototype.deleteBook = function (_id) {
        return this.http.delete('/api/' + _id).map(function (response) { return response.json(); });
    };
    return BookService;
}());
BookService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map