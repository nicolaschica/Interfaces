import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientesService, Cliente, CrearClienteDTO } from '../../../services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  nuevoCliente: CrearClienteDTO = { nombre: '', email: '', telefono: '' };
  mostrarFormulario = false;

  constructor(private clientesService: ClientesService
    , private router: Router)
   { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  irAtras(): void {
    this.router.navigate(['/']);
  }

  obtenerClientes(): void {
    this.clientesService.getClientes().subscribe((data) => {
      this.clientes = data;
    });
  }

  crearCliente(): void {
    console.log('Datos enviados:', this.nuevoCliente); // Verifica lo que se está enviando
    this.clientesService.crearCliente(this.nuevoCliente).subscribe({
      next: (cliente) => {
        this.clientes.push(cliente);
        this.nuevoCliente = { nombre: '', email: '', telefono: '' };
        this.mostrarFormulario = false;
        alert('Usuario creado con éxito');
      },
      error: (error) => {
        console.error('Error al crear cliente:', error);
        alert('No se pudo crear el usuario');
      }
    });
  }

  nuevoClienteForm(): void {
    this.mostrarFormulario = true;
  }

  cancelar(): void {
    this.mostrarFormulario = false;
    this.nuevoCliente = { nombre: '', email: '', telefono: '' };
  }
}
