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
    return this.httpClient.get('https://jsonblob.com/api/jsonblob/f409b5a1-b520-11eb-8dde-e9612f03fede');
  }
}