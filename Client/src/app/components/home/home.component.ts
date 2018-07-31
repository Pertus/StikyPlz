import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../shared/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public projects: any[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.GetProjects().subscribe(res => {
      console.log(res);
      this.projects = res;
    });
  }

}
