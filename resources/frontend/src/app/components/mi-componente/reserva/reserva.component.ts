
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { ReservaService, CrearLibroDTO } from '../../../services/reserva.service';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  libro: CrearLibroDTO = {
    titulo: '',
    autor: '',
    anio: '',
    categoria: ''
  };

  constructor(
    private reservaService: ReservaService,
    private router: Router  
  ) {}

  ngOnInit(): void {}

  irAtras(): void {
    this.router.navigate(['/page1']);  
  }   

  eliminarLibro() {
  // Aquí decides la lógica:
  // Ejemplo: limpiar el formulario
  this.libro = {
    titulo: '',
    autor: '',
    anio: '',
    categoria: ''
  };

  console.log('Libro eliminado');
}


  confirmarReserva(): void {
    console.log('Datos enviados:', this.libro);

    this.reservaService.crearLibro(this.libro).subscribe({
      next: () => {
        alert('Libro registrado con éxito');
        this.libro = { titulo: '', autor: '', anio: '', categoria: '' };
      },
      error: (err) => {
      console.error('Error al registrar libro:', err);
      alert(`No se pudo registrar el libro: ${err.status} ${err.statusText}`);
    }

    });
  }
}
