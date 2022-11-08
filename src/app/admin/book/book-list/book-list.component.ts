import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {BookCreateComponent} from "../book-create/book-create.component";
import {BookService} from "../service/book.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {IBookResponse, IBookUpdate} from "../dtos/dtos";
import {BookDeleteComponent} from "../book-delete/book-delete.component";
import {BookPatchThumbnailComponent} from "../book-patch-thumbnail/book-patch-thumbnail.component";

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
    this.snack.open("fetching books..." )
    this.service.find().subscribe({
      next: value => this.books = value,
      error: err => console.log(err)
    }).add(()=> this.snack.dismiss())

    this.service.created.subscribe((value)=>{this.books.push(value)}).add(this.dialog.closeAll)
    this.service.deleted.subscribe((value)=>{
      const index = this.books.findIndex((item) => {
        item.id === value
      })
     this.books.splice(index , 1)
      console.log(this.books)
    }
    )
  }

  createBook(){
    this.dialog.open(BookCreateComponent)
  }

  deleteBook(book: IBookResponse){
    this.dialog.open(BookDeleteComponent, {
      data: {book : book}
    })
  }

  updateBook(book: IBookResponse){
    this.dialog.open(BookPatchThumbnailComponent, {
      data:{book: book}
    })
  }

}
