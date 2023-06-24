import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  solved: boolean = false;
  issues: any = [];
  totalItems: number = 0;

  ngOnInit(): void {
    this.issues = JSON.parse(localStorage.getItem('issue')!);
    console.log(this.issues[0]);
    this.NumberOfItems();
  }

  // //chanch button to solved
  //  changeClassStyle(className: string, styleName: string, styleValue: string): void {
  //     const elements: HTMLCollectionOf<Element> = document.getElementsByClassName(className);

  //     for (let i = 0; i < elements.length; i++) {
  //       const element = elements[i];
  //       const style = element.style;
  //       style[styleName] = styleValue;
  //     }
  //   }
  clearIssues() {
    localStorage.removeItem('issue');
  }
  deleteItem(index: any) {
    this.issues.splice(index, 1);
    this.NumberOfItems();
    localStorage.setItem('issue', JSON.stringify(this.issues));
  }
  NumberOfItems() {
    this.totalItems = 0;
    for (let i = 0; i < this.issues.length; i++) {
      this.totalItems += this.issues[i].quantity;
    }
    localStorage.setItem('issue', JSON.stringify(this.issues));
  }
}
