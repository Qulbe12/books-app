import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BookCreateComponent } from './book-create/book-create.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookPatchThumbnailComponent } from './book-patch-thumbnail/book-patch-thumbnail.component';
import {MatExtensionModule} from "../../mat-extension/mat-extension.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BookCreateComponent,
    BookListComponent,
    BookDeleteComponent,
    BookDetailComponent,
    BookUpdateComponent,
    BookPatchThumbnailComponent
  ],
  imports: [
    CommonModule,
    MatExtensionModule,
    FormsModule
  ]
})
export class BookModule { }
