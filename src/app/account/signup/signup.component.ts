import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AccountService} from "../service/account.service";
import {UserCreateDtos, UserCreateResponseDtos} from "../dtos";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  users: UserCreateResponseDtos[] = []

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAllUsers().subscribe({
      next: data => {
        console.log(data)
        this.users = data
      },
      error: err => console.log(err)
    })
  }

  hide = true

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  model: UserCreateDtos = {
    name: "",
    email: "",
    password: ""
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
    this.accountService.signup(this.model).subscribe({
      next: data => console.log(data),
      error: err => console.log(err)
    })
  }

  delete(id: number){
    this.accountService.delete(id).subscribe({
      next: data => console.log(data),
      error: err => console.log(err)
    })
  }

}
