import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { SharedModule } from '../../shared/modules/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ProjectComponent],
  exports: [ProjectComponent]
})
export class ProjectModule { }
