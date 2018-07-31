import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { AppConfig } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = AppConfig.apiUrl;
  constructor(private http: HttpClient) { }

  GetProjects(): Observable<any> {
    return this.http.get(this.baseUrl + '/Project/GetProjects');
  }
}
