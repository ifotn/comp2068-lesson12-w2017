/**
 * Created by RFreeman on 3/29/2017.
 */
// dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// reference our app component
import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, FormsModule, HttpModule],
    providers: [],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
