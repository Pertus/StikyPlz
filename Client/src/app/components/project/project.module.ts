import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { TicketListItemModule } from '../ticket-list-item/ticket-list-item.module';
import { DragulaModule } from '../../../../node_modules/ng2-dragula';

@NgModule({
  imports: [
    SharedModule,
    TicketListItemModule,
    DragulaModule
  ],
  declarations: [ProjectComponent],
  exports: [ProjectComponent]
})
export class ProjectModule { }
