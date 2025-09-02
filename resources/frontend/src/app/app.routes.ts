import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ClienteComponent } from './components/mi-componente/Clientes/cliente.component';
import { LoginComponent } from './components/mi-componente/login/login.component';
import { Page1Component } from './components/mi-componente/page1/page1/page1.component';
import { ReservaComponent } from './components/mi-componente/reserva/reserva.component';
// import { Reserva2Component } from './components/mi-componente/reserva2/reserva2.component';
;

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: LoginComponent  },
      { path: 'inicio', component: InicioComponent },
      { path: 'registro', component: ClienteComponent },
      { path: 'page1', component: Page1Component },
      { path: 'reserva', component: ReservaComponent },
      // { path: 'reserva2', component: Reserva2Component}
      
    ]
  }
];
