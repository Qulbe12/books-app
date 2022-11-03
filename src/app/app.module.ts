import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExtensionModule } from './mat-extension/mat-extension.module';
import { AccountModule } from './account/account.module';
import { AdminModule } from './admin/admin.module';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccountModule,
    AdminModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
