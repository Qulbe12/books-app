import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {login, signup} from "../dtos/dtos";
import {AccountService} from "../service/account.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  hide = true

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  model: login = {
    email: JSON.stringify(this.email.value),
    password: JSON.stringify(this.password.value)
}

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'You must enter a value' : '';
  }

  submit(){
    this.accountService.login(this.model).subscribe({
      next: data => console.log(data),
      error: err => console.log(err)
    })
  }

}
