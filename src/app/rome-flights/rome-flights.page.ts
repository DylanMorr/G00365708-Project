import { Component } from '@angular/core';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-rome-flights',
  templateUrl: './rome-flights.page.html',
  styleUrls: ['./rome-flights.page.scss'],
})
export class RomeFlightsPage {

  // create myDetails variable
  myDetails: string;

  // create storage object
  constructor(private storage: Storage) { }

  // get details from storage and display it
  ionViewDidEnter(){
    this.storage.get('details')
    .then((data)=>{
      this.myDetails = data;
    })
    .catch();
  }

}