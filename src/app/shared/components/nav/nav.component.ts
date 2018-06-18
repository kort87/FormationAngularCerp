import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public appTitle: string;
  constructor() { }

  ngOnInit() {
    this.appTitle = 'My marvelous application';
  }

}
