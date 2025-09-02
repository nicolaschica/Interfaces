import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Libro {
  id: number;
  titulo: string;
  autor: string;
  anio: string;
  categoria: string;
  created_at?: string;
  updated_at?: string;
}

export interface CrearLibroDTO {
  titulo: string;
  autor: string;
  anio: string;
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private apiUrl = 'http://localhost:8000/api/libros'; 

  constructor(private http: HttpClient) {}

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiUrl);
  }

  crearLibro(libro: CrearLibroDTO): Observable<Libro> {
    return this.http.post<Libro>(this.apiUrl, libro);
  }

  eliminarLibro(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  actualizarLibro(id: number, libro: CrearLibroDTO): Observable<Libro> {
    return this.http.put<Libro>(`${this.apiUrl}/${id}`, libro);
  }
}

