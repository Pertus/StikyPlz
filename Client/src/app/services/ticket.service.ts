import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  GetAllTickets(): Observable<any> {
    return this.http.get('https://localhost:44344/api/ticket/Getalltickets');
  }
}
