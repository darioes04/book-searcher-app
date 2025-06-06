import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import SearchPageComponent from './books/pages/search-page/search-page.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet]
})
export class AppComponent {

  title = 'books-searcher';

 
  }


