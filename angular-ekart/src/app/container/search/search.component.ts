import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  // updateSearchText(e: any) {
  //   this.searchText = e.target.value;
  // }

  @Output()
  searchTextFromChild: EventEmitter<string> = new EventEmitter<string>();

  // textToSearch(){
  //   console.log(this.searchText)
  //   this.searchTextFromChild.emit(this.searchText)
  // }

  // TEMPLATE REFERENCE VARIABLE
  // searchThetext(inputText: HTMLInputElement) {
  //   console.log('searchtext...', inputText.value);
  //   this.searchText = inputText.value;
  //   this.searchTextFromChild.emit(this.searchText);
  // }

  // @ViewChild() DECORATOR

  @ViewChild('typedText') searchInputEle: ElementRef;

  searchThetext() {
    console.log('searchtext...', this.searchInputEle.nativeElement.value);

    this.searchText = this.searchInputEle.nativeElement.value;
    this.searchTextFromChild.emit(this.searchText);
  }
}
