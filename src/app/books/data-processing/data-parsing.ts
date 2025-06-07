  import { BookById } from "../interfaces/book-by-id-interface";
  import { Book } from "../interfaces/book-interface";
  import { Item } from "../interfaces/book-raw-response";
  import { BookItem } from "../interfaces/book-response-id";


    export function parseResponseBooktoBook(response: Item): Book {
      return {
          id: response.id,
          title: truncate(fixEncoding(response.volumeInfo.title), 60),
          author: response.volumeInfo.authors?.map(fixEncoding).join(', ') || 'Autor desconocido',
          publisher: fixEncoding(response.volumeInfo.publisher),
          publishedDate: response.volumeInfo.publishedDate || '',
          description: fixEncoding(response.volumeInfo.description),
          pageNumber: response.volumeInfo.pageCount || 0,
          thumbnail: response.volumeInfo.imageLinks?.thumbnail || '',
          isbn:
            response.volumeInfo.industryIdentifiers?.find(id => id.type === 'ISBN_13')?.identifier || 'ISBN desconocido'
      };
    }


    export function parseResponseBookByIdtoBook(response: BookItem): BookById{
      return {
        id: response.id,
        title: (response.volumeInfo.title),
        subtitle: response.volumeInfo.subtitle,
        author: response.volumeInfo.authors?.map(fixEncoding).join(', ') || 'Autor desconocido',
        publisher: fixEncoding(response.volumeInfo.publisher),
        publishedDate: response.volumeInfo.publishedDate || '',
        description: fixEncoding(response.volumeInfo.description),
        pageNumber: response.volumeInfo.pageCount || 0,
        thumbnail: response.volumeInfo.imageLinks?.thumbnail || '',
        isbn:
          response.volumeInfo.industryIdentifiers?.find(id => id.type === 'ISBN_13')?.identifier || 'ISBN desconocido',
        buylink: response.saleInfo.buyLink    
      }
    }

    function truncate(text: string, maxLength: number): string {
      return text.length > maxLength ? text.slice(0, maxLength - 1) + '…' : text;
    }

    // Conversión de lista
    export function parseResponsetoBookArray(responseBooks: Item[]): Book[] { 

      console.log({responseBooks});

      return responseBooks
        .filter(book =>
          book.volumeInfo.title &&
          book.volumeInfo.authors && book.volumeInfo.authors.length > 0 &&
          book.volumeInfo.publishedDate &&
          book.volumeInfo.pageCount
        )
        .map(parseResponseBooktoBook)
    }
    

      function fixEncoding(text: string = ''): string {
      return text
          .replace(/Ã¡/g, 'á')
          .replace(/Ã©/g, 'é')
          .replace(/Ã­/g, 'í')
          .replace(/Ã³/g, 'ó')
          .replace(/Ãº/g, 'ú')
          .replace(/Ã±/g, 'ñ')
          .replace(/�/g, 'ó')
          .replace(/â€™/g, "'")
          .replace(/â€œ|â€/g, '"')
          .replace(/â€“|â€”/g, '-')
          .replace(/�/g, '') // elimina carácter sustituto
      }

