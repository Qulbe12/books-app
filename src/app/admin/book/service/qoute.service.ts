import {EventEmitter, Injectable} from '@angular/core';
import {IBookCreate, IBookDetailResponse, IBookResponse, IBookUpdate} from "../dtos/dtos";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

interface IQouteService <BC, BR , BID, BU, BDR> {
  findALl(): Observable<BR[]>
  foundALL : EventEmitter<BR>

  findOne(id: BID): Observable<BDR>
  foundOne: EventEmitter<BDR>

  create(model: BC): Observable<BR>
  created: EventEmitter<BR>

  update(id: BID, model: BU): Observable<BR>
  updated: EventEmitter<BR>

  delete(id:BID): Observable<BR>
  deleted: EventEmitter<BR>
}

@Injectable({
  providedIn: 'root'
})
export class QouteService implements IQouteService<IBookCreate, IBookResponse, string, IBookUpdate, IBookDetailResponse>{
  constructor(private http: HttpClient) { }

  foundALL = new EventEmitter<IBookResponse>;
    foundOne = new EventEmitter<IBookDetailResponse>;
    created = new EventEmitter<IBookResponse>;
    updated = new EventEmitter<IBookResponse>;
    deleted = new EventEmitter<IBookResponse>;

  create(model: IBookCreate): Observable<IBookResponse> {
    return this.http.post<IBookResponse>("http://localhost:3000/book", model)
  }

  delete(id: string): Observable<IBookResponse> {
    return this.http.delete<IBookResponse>(`http://localhost:3000/book/${id}`)
  }

  findALl(): Observable<IBookResponse[]> {
    return this.http.get<IBookResponse[]>("http://localhost:3000/book")
  }

  findOne(id: string): Observable<IBookDetailResponse> {
    return this.http.get<IBookDetailResponse>(`http://localhost:3000/book/${id}`)
  }

  update(id: string, model: IBookUpdate): Observable<IBookResponse> {
    return this.http.patch<IBookResponse>(`http://localhost:3000/book/${id}`, model)
  }
}
