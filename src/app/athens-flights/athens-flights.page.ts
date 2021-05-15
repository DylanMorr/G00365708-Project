import { Component } from '@angular/core';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-athens-flights',
  templateUrl: './athens-flights.page.html',
  styleUrls: ['./athens-flights.page.scss'],
})
export class AthensFlightsPage {

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
