import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherSearched: any;
  weatherForm: FormGroup;
  constructor(private fbWeather: FormBuilder, private weatherService:WeatherService)
    {

    }

  ngOnInit() {
    this.weatherForm = this.fbWeather.group
      ({
        cityName: ['', Validators.required]
      });
  }

  searchingWeatherCity(city: any)
   {
    console.log('here CityName',city);
    this.weatherService.searchByCityName(city).subscribe(
      (data) => {
        console.log('here received data from BE', data.weatherParamSearchedCity)
        this.weatherSearched = data.weatherParamSearchedCity;
      //  console.log('Data returned from BE',this.weatherSearched);
      });

  }

  temperatureClass(tempValue)
  {
          var classList='';
        if(tempValue < 15)
        {
          classList = 'cold'; 
        }
        else if (tempValue => 15 && tempValue <= 25)
        {
            classList = 'moderate';
        }
        else if(tempValue > 25)
        {
            classList = 'hot';
        }
        return classList;
  }
  

  

}


