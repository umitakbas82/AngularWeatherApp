import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey='ce39f728785dc45e16a7fe5cc17a819e';
  private apiUrl='https://api.openweathermap.org/data/2.5/forecast/';
  constructor(private http:HttpClient) { }


  getWeatherData(city: string, units: string = 'metric'): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&units=${units}&appid=${this.apiKey}`;
    return this.http.get(url);
  }


  getHourlyForecast(city: string, units: string = 'metric'): Observable<any> {
    const url = `${this.apiUrl}hourly?q=${city}&units=${units}&appid=${this.apiKey}`;
    return this.http.get(url);
  }

}
