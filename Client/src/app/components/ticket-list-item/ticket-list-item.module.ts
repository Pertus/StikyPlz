import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketListItemComponent } from './ticket-list-item.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { AngularFontAwesomeModule } from '../../../../node_modules/angular-font-awesome';


@NgModule({
  imports: [
    SharedModule
  ],
  exports: [TicketListItemComponent],
  declarations: [TicketListItemComponent]
})
export class TicketListItemModule { }
