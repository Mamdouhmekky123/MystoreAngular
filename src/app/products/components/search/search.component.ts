import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue: string = '';
  changeSearchValue(eventData: Event) {
    // console.log((<HTMLInputElement>eventData.target).value);
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }

  @Output() searchTextChange:EventEmitter<string> = new EventEmitter<string>();
onSearchTextChange(){
  this.searchTextChange.emit(this.searchValue);
}
}
