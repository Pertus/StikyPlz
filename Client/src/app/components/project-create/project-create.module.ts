import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCreateComponent } from './project-create.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { FormsModule } from '../../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    FormsModule
  ],
  exports: [ProjectCreateComponent],
  declarations: [ProjectCreateComponent]
})
export class ProjectCreateModule { }
