import { Component, OnInit, Input } from '@angular/core';
import { TicketModel } from '../../shared/interfaces/ticketModel';
import { Ng4LoadingSpinnerService } from '../../../../node_modules/ng4-loading-spinner';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import { TicketService } from '../../shared/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  public ticketId = 0;
  public ticket: TicketModel;

  constructor(private spinnerService: Ng4LoadingSpinnerService, private activatedRoute: ActivatedRoute,
    private ticketService: TicketService) { }

  ngOnInit() {
    this.spinnerService.show();
    this.activatedRoute.params.subscribe((params: Params) => {
      this.ticketId = params['ticketId'];
      this.ticketService.GetTicket(this.ticketId).subscribe(ticket => {
        this.ticket = ticket;
        this.spinnerService.hide();
      });
    });
  }

}
