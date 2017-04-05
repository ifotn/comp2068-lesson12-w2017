/**
 * Created by RFreeman on 3/29/2017.
 */
// dependencies
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {responseInterceptor} from "angular-in-memory-web-api";

@Injectable()
export class BookService {

    constructor(private http: Http) {}

    // get
    getBooks() {
        return this.http.get('/api').map(response => response.json());
    }

    // post
    addBook(newBook) {
        // set the headers as json
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        // call the post method of our server api
        return this.http.post('/api', JSON.stringify(newBook), { headers: headers }).map(response => response.json());
    }

    // select one
    selectBook(_id) {
        return this.http.get('/api/' + _id).map(response => response.json());
    }

    // update
    updateBook(book) {
        // set the headers as json
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        // call the http put method for update
        return this.http.put('/api/' + book._id, JSON.stringify(book), { headers: headers}).map(response => response.json());
    }

    // delete
    deleteBook(_id) {
        return this.http.delete('/api/' + _id).map(response => response.json());
    }

}
