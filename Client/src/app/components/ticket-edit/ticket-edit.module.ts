import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketEditComponent } from './ticket-edit.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { FormsModule } from '../../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    FormsModule
  ],
  exports: [TicketEditComponent],
  declarations: [TicketEditComponent]
})
export class TicketEditModule { }
