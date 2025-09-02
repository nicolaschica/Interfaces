import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';

import { NavbarComponent } from './components/mi-componente/navbar.component';
import { FooterComponent } from './components/mi-componente/final/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet, NavbarComponent, FooterComponent],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mensaje: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPrueba().subscribe({
      next: (res) => {
        this.mensaje = res.mensaje;
      },
      error: (err) => {
        this.mensaje = 'Error al conectar con la API';
        console.error(err);
      }
    });
  }
}
