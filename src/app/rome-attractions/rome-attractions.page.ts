import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-rome-attractions',
  templateUrl: './rome-attractions.page.html',
  styleUrls: ['./rome-attractions.page.scss'],
})
export class RomeAttractionsPage {
  // create lat and long variable 
  lat: any;
  long: any;

  // make a geolocation object
  constructor(private geolocation: Geolocation) { }

  // cordova geolocation plugin method
  // gps method to get current position of user
  GPS(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // populate lat and long variable with current position
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
}
