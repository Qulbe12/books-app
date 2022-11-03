import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MatExtensionModule } from '../mat-extension/mat-extension.module';
import { BookModule } from './book/book.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, AdminRoutingModule, MatExtensionModule, BookModule],
})
export class AdminModule {}
