import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // create httpClient object
  constructor(private httpClient:HttpClient) { }

  // get weather data of type observable 
  GetWeatherData():Observable<any>{
    // return using api link
    return this.httpClient.get('https://jsonblob.com/api/jsonblob/de935dc3-b521-11eb-8dde-9952a3e8b336');
  }
}