import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {BookService} from "../service/book.service";
import {IBookResponse} from "../dtos/dtos";

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.scss']
})
export class BookDeleteComponent implements OnInit {

  id?: number
  book?: IBookResponse
  res: boolean = false

  constructor(@Inject(MAT_DIALOG_DATA) public data: { book: IBookResponse }, private service:BookService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.id = this.data.book.id
    this.book = this.data.book
  }

  deleteBook(id: any){
    this.service.delete(id).subscribe({
      next: value => {
        this.res = true
      },
      error: err => console.log(err)
    }).add(()=>{
      this.service.deleted.emit(this.id)
      this.dialog.closeAll()
    })
  }

}
