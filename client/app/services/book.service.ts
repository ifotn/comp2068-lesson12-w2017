/**
 * Created by RFreeman on 3/29/2017.
 */
// dependencies
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

    constructor(private http: Http) {}

    // get
    getBooks() {
        return this.http.get('/api').map(response => response.json());
    }


}
