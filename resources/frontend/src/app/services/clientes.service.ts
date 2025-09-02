// src/app/services/clientes.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaz para un cliente
export interface Cliente {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  created_at?: string;
  updated_at?: string;
}

// Interfaz para crear cliente (sin ID)
export interface CrearClienteDTO {
  nombre: string;
  email: string;
  telefono: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'http://localhost:8000/api/clientes';

  constructor(private http: HttpClient) {}

  // Obtener todos los clientes
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  // Crear nuevo cliente
  crearCliente(cliente: CrearClienteDTO): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }
}
