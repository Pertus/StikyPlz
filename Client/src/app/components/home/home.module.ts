import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { ProjectModule } from '../project/project.module';

@NgModule({
  imports: [
    SharedModule,
    ProjectModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
