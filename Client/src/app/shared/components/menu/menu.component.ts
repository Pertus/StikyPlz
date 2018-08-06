import { Component, OnInit } from '@angular/core';

const { remote } = require('electron');

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private win;
  constructor() {
    this.win = remote.getCurrentWindow();
  }

  minimize() {
    this.win.minimize();
  }
  close() {
    this.win.close();
  }

  ngOnInit() {
  }

}
