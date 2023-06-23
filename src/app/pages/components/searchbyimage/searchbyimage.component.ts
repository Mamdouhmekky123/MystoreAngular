import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-searchbyimage',
  templateUrl: './searchbyimage.component.html',
  styleUrls: ['./searchbyimage.component.css'],
})
export class SearchbyimageComponent {
  constructor(private http: HttpClient, private toast: NgToastService) {}

  onChangeFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.type === 'image/png' || file.type === 'image/jpeg') {
        const formData = new FormData();
        formData.append('file', file);

        this.http
          .post(
            'http://18.159.111.193/api/Product/recommendByImage?PageNumber=1&PageSize=10&FieldsToExclude=Features%2CDescription',
            formData
          )
          .subscribe((res) => {
            console.log(res);
            //Edit here
          });
      } else {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Please elect only jpeg or png files',
          duration: 5000,
        });
      }
    }
  }
}
