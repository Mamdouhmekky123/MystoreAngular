import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input('Total') all: number = 0;
  @Input() above400: number = 0;
  @Input() below400: number = 0;

  selectedRadioButtonValue: string = 'All'; //track which radio button you press on

  @Output() filterRadioButtonSelectionChanged: EventEmitter<string> =
    new EventEmitter<string>();


    //we call this mithod to emit the value to the parent class
  onRadioButtonSelectinChanged() {
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    // console.log(this.selectedRadioButtonValue);
  }
}
