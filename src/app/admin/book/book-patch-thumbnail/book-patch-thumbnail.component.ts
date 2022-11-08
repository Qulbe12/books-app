import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {IBookResponse} from "../dtos/dtos";
import {BookService} from "../service/book.service";

@Component({
  selector: 'app-book-patch-thumbnail',
  templateUrl: './book-patch-thumbnail.component.html',
  styleUrls: ['./book-patch-thumbnail.component.scss']
})
export class BookPatchThumbnailComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: { book: IBookResponse }, private service: BookService, private dialog: MatDialog) { }

  ngOnInit(): void {}

  update(id: number){
    this.service.patch(id , this.data.book).subscribe({
      next: value => this.data.book = value,
      error: err => console.log(err)
    }).add(()=>{this.dialog.closeAll()})
  }
}
