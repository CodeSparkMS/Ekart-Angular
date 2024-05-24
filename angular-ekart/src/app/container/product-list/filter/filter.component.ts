import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfStock: number = 0;

  selectedFilter: string = 'all';

  @Output()
  selctedOptionEvent: EventEmitter<string> = new EventEmitter<string>();

  onRadioOptionChange() {
    console.log('Value changed in child component...', this.selectedFilter);
    this.selctedOptionEvent.emit(this.selectedFilter);
  }
}
