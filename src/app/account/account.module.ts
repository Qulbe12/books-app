import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account.component';
import { MatExtensionModule } from '../mat-extension/mat-extension.module';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [LoginComponent, AccountComponent, SignupComponent],
  imports: [CommonModule, MatExtensionModule, AccountRoutingModule, ReactiveFormsModule, FormsModule],
})
export class AccountModule {}
