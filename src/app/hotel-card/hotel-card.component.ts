import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {

  constructor() { }

  @Input()
  hotel:Hotel;

  ngOnInit(): void {
  }

}
