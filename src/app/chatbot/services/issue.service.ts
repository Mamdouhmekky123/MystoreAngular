import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  constructor() {}

  userName: string = '';
  allIssue:any=[];

  getCurrentDateTime(): string {
    const currentDate: Date = new Date();
    const dateOptions: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };

    const formattedDate: string = currentDate.toLocaleDateString(
      undefined,
      dateOptions
    );
    const formattedTime: string = currentDate.toLocaleTimeString(
      undefined,
      timeOptions
    );

    return `Date: ${formattedDate} , time: ${formattedTime}`;
  }
}
