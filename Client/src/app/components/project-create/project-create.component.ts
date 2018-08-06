import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectCreateModel } from '../../shared/interfaces/projectCreateModel';
import { ProjectService } from '../../shared/services/project.service';
import { Router } from '../../../../node_modules/@angular/router';
import { Ng4LoadingSpinnerService } from '../../../../node_modules/ng4-loading-spinner';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit, OnDestroy {

  public project = { name: '' } as ProjectCreateModel;
  subs = new Subscription();

  constructor(private projectService: ProjectService, private router: Router,
    private spinnerService: Ng4LoadingSpinnerService) { }

  createProject() {
    this.spinnerService.show();
    this.subs.add(this.projectService.CreateProject(this.project).subscribe(res => {
      this.spinnerService.hide();
      this.router.navigate(['/']);
    }));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
