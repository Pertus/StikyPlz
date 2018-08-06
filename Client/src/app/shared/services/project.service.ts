import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { AppConfig } from '../../../environments/environment';
import { ProjectCreateModel } from '../interfaces/projectCreateModel';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = AppConfig.apiUrl + '/api';
  constructor(private http: HttpClient) { }

  GetProjects(): Observable<any> {
    return this.http.get(this.baseUrl + '/Project/GetProjects');
  }

  GetProject(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/Project/GetProject/' + id);
  }

  CreateProject(project: ProjectCreateModel): Observable<any> {
    return this.http.post(this.baseUrl + '/Project/CreateProject', project);
  }
}
