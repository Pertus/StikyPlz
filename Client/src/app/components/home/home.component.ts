import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectService } from '../../shared/services/project.service';
import { Ng4LoadingSpinnerService } from '../../../../node_modules/ng4-loading-spinner';
import { HubConnectionBuilder, HubConnection } from '../../../../node_modules/@aspnet/signalr';
import { ProjectModel } from '../../shared/interfaces/projectModel';
import { AppConfig } from '../../../environments/environment';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public projects: any[];
  private _hubConnection: HubConnection;
  private apiUrl = AppConfig.apiUrl;
  subs = new Subscription();
  
  constructor(private projectService: ProjectService, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();
    this.subs.add(this.projectService.GetProjects().subscribe(res => {
      this.projects = res;
      this.spinnerService.hide();
    }));

    this._hubConnection = new HubConnectionBuilder()
      .withUrl(this.apiUrl + '/hubs/project')
      .build();

    this._hubConnection.on('NewProject', (project: ProjectModel) => {
      this.projects.push(project);
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
