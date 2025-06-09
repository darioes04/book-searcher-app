import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import SearchPageComponent from './books/pages/search-page/search-page.component';
import { ThemeButtonComponent } from './books/components/theme-button/theme-button.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet, ThemeButtonComponent]
})
export class AppComponent {

  title = 'books-searcher';

 
  }


