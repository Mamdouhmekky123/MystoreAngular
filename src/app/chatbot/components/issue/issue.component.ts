import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/services/product.service';
import { IssueService } from '../../services/issue.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
})
export class IssueComponent implements OnInit {
  comment: string = '';
  state: number = 0;
  postComment: any = [];
  nowcomment: any = {};
  allnowcomments: any = [];
  issueArr: any = [];
  allIssueArr: any = [];
  loading: Boolean = false;
  userOb: any = {
    username: '',
    issue: '',
    current: this.serviceIssue.getCurrentDateTime(),
  };
  constructor(
    private service: ProductService,
    private serviceIssue: IssueService,
    private toast: NgToastService
  ) {}
  ngOnInit(): void {
    if (this.serviceIssue.userName === '') {
      this.userOb.username = 'unlogged user';
    } else {
      this.userOb.username = this.serviceIssue.userName;
    }
  }

  AddIssue() {
    this.userOb.issue = this.comment;
    this.sendToAdmin();
  }
  sendToAdmin(): void {
    this.allnowcomments.push(this.comment);
    if ('issue' in localStorage) {
      this.allIssueArr = JSON.parse(localStorage.getItem('issue')!);
    }
    this.allIssueArr.push(this.userOb);
    localStorage.setItem('issue', JSON.stringify(this.allIssueArr));
    this.comment = '';
    this.toast.success({
      detail: 'SUCCESS',
      summary: 'Your issue is Successfully send',
      duration: 5000,
    });
  }
  loggedin() {
    return localStorage.getItem('login');
  }
  checkUnkown() {
    if (this.userOb.userName === '') {
      this.serviceIssue.userName = 'unlogged user';
    }
  }
}
