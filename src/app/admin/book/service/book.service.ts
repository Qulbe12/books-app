import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IBookCreate, IBookDetailResponse, IBookPatch, IBookResponse, IBookUpdate} from "../dtos/dtos";
import {Observable} from "rxjs";

interface IService<ECreate, EUpdate, EPatch, EResponse, EDetailResponse> {
  find(): Observable<EResponse[]>

  foundAll: EventEmitter<EResponse[]>

  findOne(id: string): Observable<EDetailResponse>

  foundOne: EventEmitter<EDetailResponse>

  create(model: ECreate): Observable<EResponse>

  created: EventEmitter<EResponse>

  put(id: string, model: EUpdate): Observable<EResponse>

  updated: EventEmitter<EResponse>

  patch(id: string, model: EPatch): Observable<EResponse>

  patched: EventEmitter<EResponse>

  delete(id: string): Observable<EResponse>

  deleted: EventEmitter<EResponse>

}

@Injectable({
  providedIn: 'root'
})
export class BookService implements IService<IBookCreate, IBookUpdate, IBookPatch, IBookResponse, IBookDetailResponse> {
  constructor(private http: HttpClient) {
  }

  foundAll = new EventEmitter<IBookResponse[]>;
  foundOne = new EventEmitter<IBookDetailResponse>;
  created = new EventEmitter<IBookResponse>;
  updated = new EventEmitter<IBookResponse>;
  patched = new EventEmitter<IBookResponse>;
  deleted = new EventEmitter<IBookResponse>;

  create(model: IBookCreate): Observable<IBookResponse> {
    return new Observable<IBookResponse>(o => {
      const book: IBookResponse = {
        id: "70d4f147-6829-408f-9571-28cc408eebb4",
        name: model.name,
        price: model.price,
        thumbUrl: model.thumbUrl,
        created: new Date(),
        updated: new Date()
      }
      o.next(book)
    });
    // return this.http.post<IBookResponse
    //   >("http://localhost:3000/book" , model)
  }

  delete(id: string): Observable<IBookResponse> {
    return new Observable<IBookResponse>(o => {
      const book: IBookResponse = {
        id: "70d4f147-6829-408f-9571-28cc408eebb4",
        name: "Thousand Thoughts",
        price: 100,
        thumbUrl: "https://picsum.photos/200/300",
        created: new Date(),
        updated: new Date()
      }
      o.next(book)
    });
  }

  find(): Observable<IBookResponse[]> {
    return new Observable<IBookResponse[]>(o => {
      const books : IBookResponse[] = [
        {
          id: "70d4f147-6829-408f-9571-28cc408eebb4",
          name: "Thousand Thoughts",
          price: 100,
          thumbUrl: "https://picsum.photos/200/300",
          created: new Date(),
          updated: new Date()
        },
        {
          id: "70d4f147-6829-408f-9571-28cc408eebb4",
          name: "Thousand Thoughts",
          price: 100,
          thumbUrl: "https://picsum.photos/200/300",
          created: new Date(),
          updated: new Date()
        }
      ]
      o.next(books);
    })
  }


  findOne(id: string): Observable<IBookDetailResponse> {
    return new Observable<IBookDetailResponse>(o => {
      const book: IBookDetailResponse = {
        id: "70d4f147-6829-408f-9571-28cc408eebb4",
        name: "Thousand Thoughts",
        price: 100,
        thumbUrl: "https://picsum.photos/200/300",
        author: {
          id:"3d8d298a-e6a3-466e-8e07-52e64cba90cf",
          name: "Qulbe Hussain",
          created: new Date(),
          updated: new Date()
        },
        created: new Date(),
        updated: new Date()
      }
      o.next(book)
    });

  }

  patch(id: string, model: IBookPatch): Observable<IBookResponse> {
    return new Observable<IBookResponse>(o => {
      const book: IBookResponse = {
        id: "70d4f147-6829-408f-9571-28cc408eebb4",
        name: "Thousand Thoughts",
        price: 100,
        thumbUrl: "https://picsum.photos/200/300",
        created: new Date(),
        updated: new Date()
      }
      o.next(book)
    });
  }

  put(id: string, model: IBookUpdate): Observable<IBookResponse> {
    return new Observable<IBookResponse>(o => {
      const book: IBookResponse = {
        id: "70d4f147-6829-408f-9571-28cc408eebb4",
        name: "Thousand Thoughts",
        price: 100,
        thumbUrl: "https://picsum.photos/200/300",
        created: new Date(),
        updated: new Date()
      }
      o.next(book)
    });
  }


}
