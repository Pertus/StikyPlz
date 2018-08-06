import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProjectModel } from '../../shared/interfaces/projectModel';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import { ProjectService } from '../../shared/services/project.service';
import { Ng4LoadingSpinnerService } from '../../../../node_modules/ng4-loading-spinner';
import { TicketService } from '../../shared/services/ticket.service';
import { TicketModel } from '../../shared/interfaces/ticketModel';
import { Subscription } from '../../../../node_modules/rxjs';
import { DragulaService } from '../../../../node_modules/ng2-dragula';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { AppConfig } from '../../../environments/environment';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {

  public project: ProjectModel;
  public tickets: TicketModel[];
  public ticketsNotStarted: TicketModel[];
  public ticketsProgress: TicketModel[];
  public ticketsDone: TicketModel[];
  private projectId: number;
  public dragulaContainer = 'tickets';
  private _hubConnection: HubConnection;
  private apiUrl = AppConfig.apiUrl;

  subs = new Subscription();

  constructor(private activatedRoute: ActivatedRoute, private projectService: ProjectService,
    private spinnerService: Ng4LoadingSpinnerService, private ticketService: TicketService, private dragulaService: DragulaService) {
    this.subs.add(dragulaService.over(this.dragulaContainer)
      .subscribe(({ el, container }) => {
        container.classList.add('highlight');
      })
    );
    this.subs.add(dragulaService.out(this.dragulaContainer)
      .subscribe(({ el, container }) => {
        container.classList.remove('highlight');
      })
    );
    this.subs.add(dragulaService.dropModel(this.dragulaContainer)
      .subscribe(({ el, target, source, sourceModel, targetModel, item }) => {
        let statusChanged = false;
        console.log(target.id);
        if (target.id === 'ticketsNotStarted' && item.status !== 1) {
          item.status = 1;
          statusChanged = true;
        } else if (target.id === 'ticketsProgress' && item.status !== 2) {
          item.status = 2;
          statusChanged = true;
        } else if (target.id === 'ticketsDone' && item.status !== 3) {
          item.status = 3;
          statusChanged = true;
        }
        if (statusChanged) {
          this.spinnerService.show();
          this.ticketService.EditTicket(item).subscribe(res => {
            this.spinnerService.hide();
          });
        }

      })
    );
  }

  arrangeTickets() {
    this.ticketsNotStarted = this.tickets.filter(x => x.status === 1);
    this.ticketsProgress = this.tickets.filter(x => x.status === 2);
    this.ticketsDone = this.tickets.filter(x => x.status === 3);
  }

  addTicket(ticket: TicketModel) {
    this.ticketsNotStarted.push(ticket);
  }

  removeTicket(id: number) {
    this.ticketsNotStarted = this.ticketsNotStarted.filter(x => x.id !== id);
    this.ticketsProgress = this.ticketsProgress.filter(x => x.id !== id);
    this.ticketsDone = this.ticketsDone.filter(x => x.id !== id);
  }

  updateTicket(ticket: TicketModel) {
    const _ticket = this.tickets.find(x => x.id === ticket.id);
    const index = this.tickets.indexOf(_ticket);
    this.tickets[index] = ticket;
    this.arrangeTickets();
  }

  ngOnInit() {
    this.spinnerService.show();
    this.activatedRoute.params.subscribe((params: Params) => {
      this.projectId = params['id'];
      this.projectService.GetProject(this.projectId).subscribe(project => {
        this.project = project;
        this.ticketService.GetTicketsForProject(this.projectId).subscribe(tickets => {
          this.tickets = tickets;
          this.arrangeTickets();
          this.spinnerService.hide();
        });
      });
    });

    this._hubConnection = new HubConnectionBuilder()
      .withUrl(this.apiUrl + '/hubs/ticket')
      .build();

    this._hubConnection.on('NewTicket', (ticket: TicketModel) => {
      this.addTicket(ticket);
    });

    this._hubConnection.on('DeleteTicket', (id: number) => {
      this.removeTicket(id);
    });

    this._hubConnection.on('UpdateTicket', (ticket: TicketModel) => {
      this.updateTicket(ticket);
    });

    this._hubConnection.start()
    .then(() => {
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
    this._hubConnection.stop();
  }

}
