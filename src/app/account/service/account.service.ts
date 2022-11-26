import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {login, loginResponse, UserCreateDtos, UserCreateResponseDtos} from "../dtos";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) { }


  // login(model: login): Observable<UserCreateResponseDtos>{
  //   return this.http.post<loginResponse>('http://localhost:3000/user/create-user', model)
  // }

  signup(model: UserCreateDtos): Observable<UserCreateResponseDtos>{
    return this.http.post<UserCreateResponseDtos>('http://localhost:3000/users/create-user', model)
  }

  delete(id: number){
    return this.http.delete(`http://localhost:3000/users/delete/${id}`)
  }

  getAllUsers(): Observable<UserCreateResponseDtos[]>{
    return this.http.get<UserCreateResponseDtos[]>("http://localhost:3000/users")
  }
}
