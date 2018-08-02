import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../shared/services/project.service';
import { Ng4LoadingSpinnerService } from '../../../../node_modules/ng4-loading-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public projects: any[];

  constructor(private projectService: ProjectService, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();
    this.projectService.GetProjects().subscribe(res => {
      this.projects = res;
      this.spinnerService.hide();
    });
  }

}
