import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../Services/rome-weather.service';

@Component({
  selector: 'app-rome-weather',
  templateUrl: './rome-weather.page.html',
  styleUrls: ['./rome-weather.page.scss'],
})
export class RomeWeatherPage implements OnInit {
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
