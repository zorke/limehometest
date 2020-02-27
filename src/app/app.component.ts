import { Component } from '@angular/core';
import { Hotel } from './models/hotel';
import { PropertiesService } from './services/properties.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'limehome-app';
  latitude: number = 52;
  longitude: number = 8;
  mapHeight = window.innerHeight;

  hotels: Hotel[]  = [];
  selectedHotel: Hotel = null;

  selectedIcon = {
    url: '../assets/markers/selected.png',
    scaledSize: {
      width: 50,
      height: 50
    }
  }

  notSelectedIcon = {
    url: '../assets/markers/notselected.png',
    scaledSize: {
      width: 30,
      height: 30
    }
  }

  constructor(private service: PropertiesService){}

  ngOnInit() {
    this.getHotels(this.latitude,this.longitude);
  }

  getHotels(latitude: number, longitude: number){

    this.service.get(latitude, longitude, "hotel").subscribe(response => {
      // this.hotels = [];
      const results = response.results.filter(item => item.position);
      results.forEach(element => {
        if (!this.hotels.map(hotel => hotel.id).includes(element.id)){
          const hotel: Hotel = {
            id:element.id,
            title: element.title,
            vicinity: element.vicinity.replace("<br/>", " "),
            description: `${element.distance} from the city center.`,
            imageUrl: "https://limehome.imgix.net/properties/97/b37882b9-569b-4767-8421-0791ac1afd3c.jpg?w=640&h=448&fit=crop",
            latitude: element.position[0],
            longitude: element.position[1],
            price: element.position[0]
          }
          this.hotels.push(hotel);
        }
      });
    });
  }

  onMapClick(event) {
    const longitude = event.coords.lng;
    const latitude = event.coords.lat;
    this.longitude = longitude;
    this.latitude = latitude;
    this.getHotels(latitude, longitude);
  }

  onMarkerClick(event) {
    const longitude = event.longitude;
    const latitude = event.latitude;
    const clickedHotel = this.hotels.find(hotel => hotel.latitude == latitude && hotel.longitude == longitude);
    this.selectedHotel = !this.selectedHotel ? clickedHotel : (this.selectedHotel.id == clickedHotel.id ? null : clickedHotel);
  }

  onMapReady(map) {
    map.addListener('dragend', () => {
      const latitude = map.center.lat();
      const longitude = map.center.lng();
      this.getHotels(latitude, longitude);
    })
  }
  
}
