import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {login, loginResponse, signup, signupResponse} from "../dtos";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) { }


  login(model: login): Observable<loginResponse>{
    return this.http.post<loginResponse>('http://localhost:3000/user', model)
  }

  signup(model: signup): Observable<signupResponse>{
    return this.http.post<signupResponse>("http://localhost:3000/user" , model)
  }
}
