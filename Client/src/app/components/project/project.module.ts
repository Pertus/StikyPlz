import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { TicketListItemModule } from '../ticket-list-item/ticket-list-item.module';

@NgModule({
  imports: [
    SharedModule,
    TicketListItemModule
  ],
  declarations: [ProjectComponent],
  exports: [ProjectComponent]
})
export class ProjectModule { }
