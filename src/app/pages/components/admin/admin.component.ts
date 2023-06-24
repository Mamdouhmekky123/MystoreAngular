import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  solved: boolean = false;
  issues: any = [];
  invoices: any = [];
  totalItems: number = 0;
  totalInvItems: number = 0;

  ngOnInit(): void {
    this.issues = JSON.parse(localStorage.getItem('issue')!);
    this.invoices = JSON.parse(localStorage.getItem('invoice')!);
    console.log(this.invoices[0] );
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
  clearInvoices() {
    localStorage.removeItem('invoice');
  }
  clearIssues() {
    localStorage.removeItem('issue');
  }

  deleteInvoice(index: any) {
    this.invoices.splice(index, 1);
    this.NumberOfInvItems();
    localStorage.setItem('invoice', JSON.stringify(this.invoices));
  }
  deleteItem(index: any) {
    this.issues.splice(index, 1);
    this.NumberOfItems();
    localStorage.setItem('issue', JSON.stringify(this.issues));
  }
  NumberOfInvItems() {
    this.totalInvItems = 0;
    for (let i = 0; i < this.invoices.length; i++) {
      this.totalInvItems += this.invoices[i].quantity;
    }
    localStorage.setItem('invoice', JSON.stringify(this.invoices));
  }
  NumberOfItems() {
    this.totalItems = 0;
    for (let i = 0; i < this.issues.length; i++) {
      this.totalItems += this.issues[i].quantity;
    }
    localStorage.setItem('issue', JSON.stringify(this.issues));
  }
}
