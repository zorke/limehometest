import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../constants/app.constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  height = AppConstants.MENU_HEIGHT;

  constructor() { }

  ngOnInit(): void {
  }

}
