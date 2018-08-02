import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from '../../../../node_modules/ng4-loading-spinner';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import { ProjectService } from '../../shared/services/project.service';
import { ProjectModel } from '../../shared/interfaces/projectModel';
import { TicketCreateModel } from '../../shared/interfaces/ticketCreateModel';
import { TicketService } from '../../shared/services/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.scss']
})
export class TicketCreateComponent implements OnInit {

  private project: ProjectModel;
  public ticket = { title: '', description: '', projectId: 0 } as TicketCreateModel;
  public projects: ProjectModel[];

  constructor(private spinnerService: Ng4LoadingSpinnerService, private activatedRoute: ActivatedRoute,
    private projectService: ProjectService, private ticketService: TicketService, private router: Router) { }

  createTicket() {
    this.spinnerService.show();
    this.ticketService.CreateTicket(this.ticket).subscribe(res => {
      this.spinnerService.hide();
      this.router.navigate(['project/' + this.project.id]);
    });
  }

  ngOnInit() {

    this.spinnerService.show();
    this.activatedRoute.params.subscribe((params: Params) => {
      this.projectService.GetProject(params['projectId']).subscribe(project => {
        this.project = project;
        this.ticket.projectId = project.id;
        this.projectService.GetProjects().subscribe(projects => {
          this.projects = projects;
          console.log(this.projects);
          this.spinnerService.hide();
        });
      });
    });
  }

}
