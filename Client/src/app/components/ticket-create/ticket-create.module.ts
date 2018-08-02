import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TicketCreateComponent } from './ticket-create.component';
import { SharedModule } from '../../shared/modules/shared.module';

@NgModule({
  imports: [
    SharedModule,
    FormsModule
  ],
  exports: [TicketCreateComponent],
  declarations: [TicketCreateComponent]
})
export class TicketCreateModule { }
