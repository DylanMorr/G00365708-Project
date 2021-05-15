import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../Services/paris-weather.service';

@Component({
  selector: 'app-paris-weather',
  templateUrl: './paris-weather.page.html',
  styleUrls: ['./paris-weather.page.scss'],
})
export class ParisWeatherPage implements OnInit {
  // weather array to read in api
  weather: any = [];

  // make a weatherService object
  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    // subscribe makes it async so page doesn't freeze while looking for data
    this.weatherService.GetWeatherData().subscribe(
      (data)=>{
        this.weather = data.weather;
        // can inspect page to see api data with console.log
        console.log(this.weather);
      }
    );
  }

}
