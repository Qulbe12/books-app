import { Component, OnInit } from '@angular/core';
import {BookService} from "../service/book.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {IBookCreate, IBookResponse} from "../dtos/dtos";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  data: IBookCreate = {
    price: 0,
    name:"",
    thumbUrl: ""

  }

  constructor(private bookService:BookService, private snack:MatSnackBar , private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createBook(){
    this.bookService.create(this.data).subscribe({
      next: value => {
        this.bookService.created.emit(value)
        console.log(value)
      },
      error: err => console.log(err)
    })
  }
}
