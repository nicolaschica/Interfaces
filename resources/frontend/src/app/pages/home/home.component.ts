import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/mi-componente/navbar.component';
import { FooterComponent } from '../../components/mi-componente/final/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
