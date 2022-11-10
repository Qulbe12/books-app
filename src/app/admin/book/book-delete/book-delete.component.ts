import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {BookService} from "../service/book.service";
import {IBookResponse} from "../dtos/dtos";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.scss']
})
export class BookDeleteComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: { bookId: string },
              private service:BookService,
              private myDialogRef: MatDialogRef<BookDeleteComponent>,
              private snack : MatSnackBar) {

  }

  ngOnInit(): void {

  }

  deleteBook(){
    this.snack.open("Deleting book ...");
    this.service.delete(+this.data.bookId).subscribe({
      next: data => {
        this.snack.dismiss();
        this.myDialogRef.close({
          id: this.data.bookId,
          name: '',
          price: '',
          thumbUrl: ''
        })
      },
      error: err => console.log(err)
    })
  }

}
