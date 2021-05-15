import { Component } from '@angular/core';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-donegal-flights',
  templateUrl: './donegal-flights.page.html',
  styleUrls: ['./donegal-flights.page.scss'],
})
export class DonegalFlightsPage {

  // create myDetails variable
  myDetails: string;
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
