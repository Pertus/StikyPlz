import { Component, OnInit } from '@angular/core';
import { ProjectCreateModel } from '../../shared/interfaces/projectCreateModel';
import { ProjectService } from '../../shared/services/project.service';
import { Router } from '../../../../node_modules/@angular/router';
import { Ng4LoadingSpinnerService } from '../../../../node_modules/ng4-loading-spinner';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  public project = { name: '' } as ProjectCreateModel;

  constructor(private projectService: ProjectService, private router: Router,
    private spinnerService: Ng4LoadingSpinnerService) { }

  createProject() {
    this.spinnerService.show();
    this.projectService.CreateProject(this.project).subscribe(res => {
      this.spinnerService.hide();
      this.router.navigate(['/']);
    });
  }

  ngOnInit() {
  }

}
