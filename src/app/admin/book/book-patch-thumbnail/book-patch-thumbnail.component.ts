import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {IBookCreate, IBookPatch, IBookResponse, IBookUpdate} from "../dtos/dtos";
import {BookService} from "../service/book.service";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-patch-thumbnail',
  templateUrl: './book-patch-thumbnail.component.html',
  styleUrls: ['./book-patch-thumbnail.component.scss']
})
export class BookPatchThumbnailComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { book: IBookResponse },
    private service: BookService,
    private myDialogRef: MatDialogRef<BookPatchThumbnailComponent>) {

  }

  form = new FormGroup({
    thumbUrl : new FormControl(this.data.book.thumbUrl, [Validators.required]),
    price : new FormControl(this.data.book.price, [Validators.required]),
    name: new FormControl(this.data.book.name, [Validators.required])
  });


  ngOnInit(): void {

  }

  submit(){
    const model = this.form.value as IBookPatch
    this.service.patch(this.data.book.id , model ).subscribe({
      next: data => {
        this.myDialogRef.close(data)
      },
      error: err => console.log(err)
    })
  }
}
