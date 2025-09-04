import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { ReservaService, Libro } from '../../../../services/reserva.service';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  libros: Libro[] = [];
  busqueda: string = '';

  constructor(
    private router: Router,
    private reservaService: ReservaService
  ) {}

  ngOnInit(): void {
    this.obtenerLibros();
  }

  irLibro(): void {
    this.router.navigate(['/reserva']);
  }

  irAtras(): void {
    this.router.navigate(['/']);
  }

  obtenerLibros(): void {
    this.reservaService.getLibros().subscribe({
      next: (data) => this.libros = data,
      error: (err) => console.error('Error al obtener libros:', err)
    });
  }

  librosFiltrados(): Libro[] {
    if (!this.busqueda) return this.libros;
    const texto = this.busqueda.toLowerCase();
    return this.libros.filter(l =>
      l.titulo.toLowerCase().includes(texto) ||
      l.autor.toLowerCase().includes(texto)
    );
  }

  eliminarLibro(id: number): void {
    if (confirm('¿Seguro que deseas eliminar este libro?')) {
      this.reservaService.eliminarLibro(id).subscribe({
        next: () => {
          alert('Libro eliminado con éxito');
          this.obtenerLibros(); // Refrescar la lista de libros
        },
        error: (err) => {
          console.error('Error al eliminar libro:', err);
          alert('No se pudo eliminar el libro');
        }
      });
    }
  }
}
