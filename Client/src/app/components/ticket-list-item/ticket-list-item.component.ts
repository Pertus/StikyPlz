import { Component, OnInit, Input } from '@angular/core';
import { TicketModel } from '../../shared/interfaces/ticketModel';

@Component({
  selector: 'app-ticket-list-item',
  templateUrl: './ticket-list-item.component.html',
  styleUrls: ['./ticket-list-item.component.scss']
})
export class TicketListItemComponent implements OnInit {

  @Input('ticket') ticket: TicketModel;

  constructor() { }

  ngOnInit() {
  }

}
