import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AngularFontAwesomeModule } from '../../../../node_modules/angular-font-awesome';
import {MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatButtonModule, MatDividerModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFontAwesomeModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatDividerModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    AngularFontAwesomeModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatDividerModule
  ]
})
export class SharedModule { }
