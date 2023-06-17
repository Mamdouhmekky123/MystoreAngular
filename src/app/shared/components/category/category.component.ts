import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  @Input() title: string = '';
  @Input() data: any[] = [];

  @Output() selectedValue = new EventEmitter();

  detectChanges(event: any) {
    this.selectedValue.emit(event);
  }
}
