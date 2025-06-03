import { Book } from './interfaces/book-interface';
import { BookResponse, Item, VolumeInfo, IndustryIdentifier } from './interfaces/book-raw-response';

  export function parseResponseBooktoBook(response: Item): Book {
    return {
        id: response.id,
        title: fixEncoding(response.volumeInfo.title),
        author: response.volumeInfo.authors?.map(fixEncoding).join(', ') || 'Autor desconocido',
        publisher: fixEncoding(response.volumeInfo.publisher),
        publishedDate: response.volumeInfo.publishedDate || '',
        description: fixEncoding(response.volumeInfo.description),
        pageNumber: response.volumeInfo.pageCount || 0,
        thumbnail: response.volumeInfo.imageLinks?.thumbnail || '',
        isbn:
          response.volumeInfo.industryIdentifiers?.find(id => id.type === 'ISBN_13')?.identifier ||
          response.volumeInfo.industryIdentifiers?.[0]?.identifier || ''
    };
  }


  // Conversión de lista
  export function parseResponsetoBookArray(responseBooks: Item[]): Book[] {
    return responseBooks.map(parseResponseBooktoBook);
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

