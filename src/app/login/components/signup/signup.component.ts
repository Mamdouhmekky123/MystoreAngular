import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from '../../helpers/validationform';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  public signUpForm!: FormGroup;
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}
  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      gender: 0,
      // "birthdate": this.getCurrentDate(),
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      role: 0,
      password: ['', Validators.required],
    });
  }
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }
  onSignup() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      let signUpObj = {
        ...this.signUpForm.value,
        role: '',
        token: '',
      };
      this.auth.signUp(signUpObj);
      this.auth.signUp(this.signUpForm.value).subscribe({
        next: (res) => {
          console.log(res);
          alert("Registered Successfully")
          this.signUpForm.reset();
          this.router.navigate(['login']);
        },
        error: (err) => {
          alert(err.error);
        },
      });
    } else {
      ValidateForm.validateAllFormFields(this.signUpForm); //{7}
    }
  }
  getCurrentDate(): string {
    const date = new Date();
    return date.toISOString();
  }
  geAllOrders() {
    this.auth.getOrder().subscribe((res: any) => {
      console.log(res);
    });
  }
}
