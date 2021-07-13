import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  weatherUrl : string ='http://localhost:3001/weather' 
  constructor(private httpClient:HttpClient) 
    {

    }

    searchByCityName(city:any)
    {
      return this.httpClient.post<{weatherParamSearchedCity:any}>(`${this.weatherUrl}/search`,city);
    }
  



}
