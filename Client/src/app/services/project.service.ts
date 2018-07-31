import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  GetProjects(): Observable<any> {
    return this.http.get('https://localhost:44344/api/Project/GetProjects');
  }
}
