import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weathermain',
  templateUrl: './weathermain.component.html',
  styleUrl: './weathermain.component.css'
})
export class WeathermainComponent {


  city: string=""; 
  unit: string = 'metric';  
  weatherData: any;
  errorMessage: string | null = null;
  hourlyForecast: any[] = [];
constructor(private service:WeatherService){}
ngOnInit(): void {
  // this.getWeather();
}





getWeather(): void {
  if (!this.city) {
    this.errorMessage = 'Şehir adı boş olamaz.';
    return;
  }

  // Hava durumu verilerini al
  this.service.getWeatherData(this.city, this.unit).subscribe(data => {
    this.weatherData = data;
    this.errorMessage = null;
    
    // Saatlik hava tahminlerini al
    this.service.getHourlyForecast(this.city, this.unit).subscribe(hourlyData => {
      this.hourlyForecast = hourlyData.list;
    }, error => {
      this.errorMessage = 'Saatlik hava tahminlerini alırken bir hata oluştu: ' + error.message;
      this.hourlyForecast = [];
    });

  }, error => {
    this.errorMessage = 'Geçersiz şehir adı veya API hatası: ' + error.message;
    this.weatherData = null; // Hava verilerini sıfırla
    this.hourlyForecast = []; // Saatlik verileri sıfırla
  });
}







getFiveDayForecast(): any[] {
  if (!this.weatherData || !this.weatherData.list) return [];  

  const forecasts = this.weatherData.list;
  const uniqueDates = [...new Set(forecasts.map((item: any) => item.dt_txt.split(' ')[0]))];
  
  return uniqueDates.slice(0, 5).map(date => {
    const dailyData = forecasts.filter((item: any) => item.dt_txt.startsWith(date));
    const avgTemp = dailyData.reduce((sum: number, item: any) => sum + item.main.temp, 0) / dailyData.length;
    const weatherDescription = dailyData[0].weather[0].description;
    const icon = dailyData[0].weather[0].icon;

    return {
      date,
      temp: Math.round(avgTemp),
      weather: weatherDescription,
      icon
    };
  });
}

getIconUrl(iconCode: string): string {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
}
