import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
 
  // create myDetails variable
  myDetails: string;

  // create storage and navCtrl objects
  constructor(private storage: Storage, private navCtrl:NavController) {}

  ngOnInit(){
    this.storage.get("details")
    .then((data)=>{
      this.myDetails = data;
    })
    .catch();
  }

  // save details in here
  saveDetails(){
    // test if details is saved
    console.log(this.myDetails);

    // save details
    this.storage.set("details", this.myDetails)
    .then(()=>{
      // once saved go to page with areas
      this.navCtrl.navigateForward('/areas');
    })
    .catch();
  }
}