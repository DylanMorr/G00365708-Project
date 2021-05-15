import { Component } from '@angular/core';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-paris-flights',
  templateUrl: './paris-flights.page.html',
  styleUrls: ['./paris-flights.page.scss'],
})
export class ParisFlightsPage {
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
