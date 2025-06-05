import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import SearchBarComponent from './pages/search-page/search-bar/search-bar.component';
import SearchPageComponent from './pages/search-page/search-page.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet, SearchPageComponent]
})
export class AppComponent {

  title = 'books-searcher';

 
  }


