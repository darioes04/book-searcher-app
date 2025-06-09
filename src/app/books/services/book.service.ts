import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BookItem } from '../interfaces/book-response-id';
import { BookResponse } from '../interfaces/book-raw-response';
import { catchError, of, tap } from 'rxjs';


const api_key = 'AIzaSyADPgVvGIoQeEG9LXTZv2jUuzQqaMRDjuM';
const url = 'https://www.googleapis.com/books/v1';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private http = inject(HttpClient);

  showBooks(query: string, author: string, publisher: string) {
    let finalQuery: string = ''
    console.log({publisher});
    console.log({author})
    if(author && publisher){
      finalQuery = `intitle:${query}+inauthor:${author}+inpublisher:${publisher}`;
    }
    if(author){
      finalQuery = `intitle:${query}+inauthor:${author}`;
    }
    else if(publisher){
      finalQuery = `intitle:${query}+inpublisher:${publisher}`;
    }
    else{
      finalQuery=`intitle:${query}`
    }
     return this.http.get<BookResponse>(`${url}/volumes`, {
      params: {
        q: finalQuery,
        key: api_key
      }
    }).pipe(
      tap(response => {
        if (!response.items || response.items.length === 0) {
          console.warn('No books found for the query');
        } else {
          console.log(`Found ${response.items.length} books`);
        }
      }),
      catchError(error => {
        console.error('Error fetching books', error);
        return of({ items: [], totalItems: 0 } as unknown as BookResponse); // evita romper el flujo
      })
    );
  }

  showBookById(id: string){
    return this.http.get<BookItem>(`${url}/volumes/${id}?`, {
      params: {
        key: api_key
        }
      }
    );
  }

}
