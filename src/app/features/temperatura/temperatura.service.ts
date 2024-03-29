import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { temperatureInterface } from './temperatura.interface';

@Injectable({
  providedIn: 'root',
})
export class TemperaturaService {
  public apiUrl = 'https://cities-temperature.p.rapidapi.com/weather/v1';

  constructor(private http: HttpClient) {}

  getAll(city: string): Observable<temperatureInterface> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'a729d4798dmsh66bff6786f53f36p154a74jsnd92bd54940b6',
      'X-RapidAPI-Host': 'cities-temperature.p.rapidapi.com',
    });

    const params = { city: city };

    return this.http.get<temperatureInterface>(this.apiUrl, {
      headers,
      params,
    });
  }
}
