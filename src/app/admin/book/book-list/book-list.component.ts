import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {BookCreateComponent} from "../book-create/book-create.component";
import {BookService} from "../service/book.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {IBookResponse} from "../dtos/dtos";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: IBookResponse[] = []

  constructor(private service: BookService, private snack: MatSnackBar, private dialog: MatDialog) {
  }


  ngOnInit(): void {
    this.snack.open("fetching books..." , "ok" , {
      duration: 5000
    })
    this.service.find().subscribe({
      next: value => {
        this.books = value
      },
      error: err => console.log(err)
    })
  }

  createBook(){
    this.dialog.open(BookCreateComponent)
  }

}
