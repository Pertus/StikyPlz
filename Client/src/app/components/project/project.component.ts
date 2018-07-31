import { Component, OnInit, Input } from '@angular/core';
import { ProjectModel } from '../../shared/interfaces/projectModel';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input('project') project: ProjectModel;

  constructor() { }

  ngOnInit() {
    console.log(this.project);
  }

}
