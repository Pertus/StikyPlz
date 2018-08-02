import { Component, OnInit, Input } from '@angular/core';
import { ProjectModel } from '../../shared/interfaces/projectModel';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import { ProjectService } from '../../shared/services/project.service';
import { Ng4LoadingSpinnerService } from '../../../../node_modules/ng4-loading-spinner';
import { TicketService } from '../../shared/services/ticket.service';
import { TicketModel } from '../../shared/interfaces/ticketModel';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public project: ProjectModel;
  public tickets: TicketModel[];
  private projectId: number;

  constructor(private activatedRoute: ActivatedRoute, private projectService: ProjectService,
    private spinnerService: Ng4LoadingSpinnerService, private ticketService: TicketService) { }

  ngOnInit() {
    this.spinnerService.show();
    this.activatedRoute.params.subscribe((params: Params) => {
      this.projectId = params['id'];
      this.projectService.GetProject(this.projectId).subscribe(project => {
        this.project = project;
        this.ticketService.GetTicketsForProject(this.projectId).subscribe(tickets => {
          this.tickets = tickets;
          this.spinnerService.hide();
        });
      });
    });
  }

}
