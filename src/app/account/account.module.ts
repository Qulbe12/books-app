import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account.component';
import { MatExtensionModule } from '../mat-extension/mat-extension.module';

@NgModule({
  declarations: [LoginComponent, AccountComponent],
  imports: [CommonModule, MatExtensionModule, AccountRoutingModule],
})
export class AccountModule {}
