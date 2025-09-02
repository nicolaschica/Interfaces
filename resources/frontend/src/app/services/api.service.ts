import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000/api'; // URL base de tu API Laravel

  constructor(private http: HttpClient) {}

  getPrueba(): Observable<any> {
    return this.http.get(`${this.baseUrl}/prueba`);
  }
}
