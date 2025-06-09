import { ChangeDetectionStrategy, Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export default class SearchBarComponent {

 searchValue: string = '';

constructor(){
  const savedQuery = localStorage.getItem('lastSearchQuery');
  if(savedQuery){
    this.searchValue = savedQuery;
  } 
}

  @Output() query = new EventEmitter<string>();

  

  onSearchBook(query: string){
    localStorage.setItem('lastSearchQuery', query);
    this.query.emit(query);
  }

 }
