import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BookResponse } from '../../interfaces/book-raw-response';
import { BookItem } from '../../interfaces/book-response-id';

const api_key = 'AIzaSyADPgVvGIoQeEG9LXTZv2jUuzQqaMRDjuM';
const url = 'https://www.googleapis.com/books/v1';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private http = inject(HttpClient);

  showBooks(query: string) {
    return this.http.get<BookResponse>(`${url}/volumes?`, {
        params: {
          q: `intitle:${query}`,
          key: api_key
        }
      }
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
