import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProjectModel } from '../../shared/interfaces/projectModel';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import { ProjectService } from '../../shared/services/project.service';
import { Ng4LoadingSpinnerService } from '../../../../node_modules/ng4-loading-spinner';
import { TicketService } from '../../shared/services/ticket.service';
import { TicketModel } from '../../shared/interfaces/ticketModel';
import { Subscription } from '../../../../node_modules/rxjs';
import { DragulaService } from '../../../../node_modules/ng2-dragula';

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
      this.spinnerService.show();
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
        this.ticketService.EditTicket(item).subscribe(res => {
          this.spinnerService.hide();
        });
      }

    })
  );
  }

  ngOnInit() {
    this.spinnerService.show();
    this.activatedRoute.params.subscribe((params: Params) => {
      this.projectId = params['id'];
      this.projectService.GetProject(this.projectId).subscribe(project => {
        this.project = project;
        this.ticketService.GetTicketsForProject(this.projectId).subscribe(tickets => {
          this.tickets = tickets;
          this.ticketsNotStarted = this.tickets.filter(x => x.status === 1);
          this.ticketsProgress = this.tickets.filter(x => x.status === 2);
          this.ticketsDone = this.tickets.filter(x => x.status === 3);
          console.log(this.ticketsNotStarted);
          console.log(this.ticketsProgress);
          console.log(this.ticketsDone);
          this.spinnerService.hide();
        });
      });
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
