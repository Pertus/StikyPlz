import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../../environments/environment';
import { TicketCreateModel } from '../interfaces/ticketCreateModel';
import { TicketModel } from '../interfaces/ticketModel';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private baseUrl = AppConfig.apiUrl + '/api';

  constructor(private http: HttpClient) { }

  GetTicketsForProject(projectId: number): Observable<any> {
    return this.http.get(this.baseUrl + '/Ticket/GetTicketsForProject/' + projectId);
  }

  CreateTicket(ticket: TicketCreateModel): Observable<any> {
    return this.http.post(this.baseUrl + '/Ticket/CreateTicket', ticket);
  }

  GetTicket(ticketId: number): Observable<any> {
    return this.http.get(this.baseUrl + '/Ticket/GetTicket/' + ticketId);
  }

  EditTicket(ticket: TicketModel): Observable<any> {
    return this.http.post(this.baseUrl + '/Ticket/EditTicket', ticket);
  }

  DeleteTicket(ticketId: number): Observable<any> {
    return this.http.get(this.baseUrl + '/Ticket/DeleteTicket/' + ticketId);
  }
}
