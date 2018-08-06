import { Component, OnInit } from '@angular/core';
import { ServerErrorService } from '../../services/server-error.service';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss']
})
export class ServerErrorComponent implements OnInit {

  constructor(public serverErrorService: ServerErrorService) { }

  ngOnInit() {
  }

}
