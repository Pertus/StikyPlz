import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket.component';
import { SharedModule } from '../../shared/modules/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [TicketComponent],
  declarations: [TicketComponent]
})
export class TicketModule { }
