import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ng4LoadingSpinnerService } from '../../../../node_modules/ng4-loading-spinner';
import { ActivatedRoute, Params, Router } from '../../../../node_modules/@angular/router';
import { TicketService } from '../../shared/services/ticket.service';
import { TicketModel } from '../../shared/interfaces/ticketModel';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.scss']
})
export class TicketEditComponent implements OnInit, OnDestroy {

  public ticket = {} as TicketModel;
  subs = new Subscription();

  constructor(private spinnerService: Ng4LoadingSpinnerService, private activatedRoute: ActivatedRoute,
    private ticketService: TicketService, private router: Router) { }

  editTicket() {
    this.ticketService.EditTicket(this.ticket).subscribe(res => {
      this.router.navigate(['/ticket/' + this.ticket.id]);
    });
  }

  deleteTicket() {
    this.ticketService.DeleteTicket(this.ticket.id).subscribe(res => {
      this.router.navigate(['/project/' + this.ticket.projectId]);
    });
  }

  ngOnInit() {
    this.spinnerService.show();
    this.subs.add(this.activatedRoute.params.subscribe((params: Params) => {
      this.subs.add(this.ticketService.GetTicket(params['ticketId']).subscribe(ticket => {
        this.ticket = ticket;
        this.spinnerService.hide();
      }));
    }));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
