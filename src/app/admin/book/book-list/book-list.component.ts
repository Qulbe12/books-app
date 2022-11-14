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

  fetchBooks(){
    //open snack
    this.snack.open("fetching books..." )
    //call service
    this.service.find().subscribe({
      //success response
      next: data => {
        // do your job
        this.books = data;
        //close snack
        this.snack.dismiss()
      },
      //error response
      error: err => {
        //do you job

        //open snack with error message
        this.snack.open("Something went wrong", "Error", {duration: 5000})
      }
    });
  }


  showBook(book:IBookResponse){

  }

  createBook(){
    const dialogRef = this.dialog.open(BookCreateComponent)
    dialogRef.afterClosed().subscribe((book:IBookResponse) => {
      if(book){
      this.books.push(book)
      }
    })
  }

  deleteBook(book: IBookResponse){
    const dialogRef = this.dialog.open(BookDeleteComponent, {
      data: {bookId: book.id }
    })

    dialogRef.afterClosed().subscribe(book => {

      console.log((book))

       const index =  this.books.findIndex(x=> x.id === book.id)
      console.log((index))
      if(index > -1){


        this.books.splice(index, 1)
      }
    })
  }

  updateBook(book: IBookResponse){
    const dialogRef = this.dialog.open(BookPatchThumbnailComponent, {
      data:{book}
    })
    // //replace book with previus
    dialogRef.afterClosed().subscribe((book:IBookResponse) => {
      if(book){
        this.books.map( x => {
          if(x.id === book.id){
            x.name = book.name
            x.thumbUrl = book.thumbUrl
            x.price = book.price
          }
        })
      }
    })
  }



  ngOnInit(): void {
    this.fetchBooks();

  //  all the signals from some components those reference we dont have
    this.service.created.subscribe((book) => {
      this.books.push(book)
      document.write(book.name)
    })

  }
}
