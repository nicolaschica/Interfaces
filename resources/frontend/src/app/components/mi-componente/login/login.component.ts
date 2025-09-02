import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientesService, Cliente } from '../../../services/clientes.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login = {
    nombre: '',
    email: ''
  };

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) {}

  iniciarSesion(): void {
    this.clientesService.getClientes().subscribe({
      next: (clientes: Cliente[]) => {
        const clienteValido = clientes.find(c =>
          c.nombre === this.login.nombre && c.email === this.login.email
        );

        if (clienteValido) {
          alert('Inicio de sesión exitoso');
          this.router.navigate(['/page1']);
        } else {
          alert('Credenciales inválidas');
        }
      },
      error: () => {
        alert('Error al obtener los clientes');
      }
    });
  }

  irARegistro(): void {
    this.router.navigate(['/registro']);
  }
}
