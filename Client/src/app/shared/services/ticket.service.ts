import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private baseUrl = AppConfig.apiUrl;

  constructor(private http: HttpClient) { }

  GetTicketsForProject(projectId: number): Observable<any> {
    return this.http.get(this.baseUrl + '/Ticket/GetTicketsForProject/' + projectId);
  }
}
