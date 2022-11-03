import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexComponent } from './flex/flex.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { LayoutAsideComponent } from './layout-aside/layout-aside.component';
import { MatIconTextDirective } from './directives/mat-icon-text.directive';
import { CardTransparentDirective } from './directives/card-transparent.directive';
import { FlexColumnDirective } from './directives/flex-column.directive';
import { JustifyBetweenDirective } from './directives/justify-between.directive';
import { JustifyCenterDirective } from './directives/justify-center.directive';
import { LayoutCenterComponent } from './layout-center/layout-center.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDialogModule} from "@angular/material/dialog";

const MatModules = [
  MatListModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatTooltipModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatDialogModule
];

@NgModule({
  declarations: [
    FlexComponent,
    LayoutAsideComponent,
    LayoutCenterComponent,
    MatIconTextDirective,
    CardTransparentDirective,
    FlexColumnDirective,
    JustifyBetweenDirective,
    JustifyCenterDirective,
  ],
  imports: [CommonModule, ...MatModules],
  exports: [
    ...MatModules,
    FlexComponent,
    LayoutAsideComponent,
    LayoutCenterComponent,
    MatIconTextDirective,
    CardTransparentDirective,
    FlexColumnDirective,
    JustifyBetweenDirective,
    JustifyCenterDirective,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { floatLabel: 'always' },
    },
  ],
})
export class MatExtensionModule {}
