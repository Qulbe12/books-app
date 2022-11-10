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

  model: IBookCreate = {
    price: 0,
    name:"",
    thumbUrl: ""
  }

  constructor(private bookService:BookService, private snack:MatSnackBar , private myDialogRef: MatDialogRef<BookCreateComponent>) { }

  ngOnInit(): void {
  }

  submit(){
    //open snack
    this.snack.open("Creating book ...");
    //call service
    this.bookService.create(this.model).subscribe({
      //success response
      next: data => {
        //do your job
        this.myDialogRef.close(data);
      //  close snack
        this.snack.dismiss();
      },
      //error response
      error: err => {
        //do you job

        //show error
        this.snack.open("Something went wrong", "Error", {duration: 5000})
      }
    })
  }
}
