import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EjerciciosComponent } from './pages/ejercicios/ejercicios.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClienteProgresoComponent } from './pages/clientes/cliente-progreso.component';
import { RutinasComponent } from './pages/rutinas/rutinas.component';
import { SesionesComponent } from './pages/sesiones/sesiones.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './core/guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'inicio', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'ejercicios', component: EjerciciosComponent, canActivate: [AuthGuard] },
  { path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard] },
  { path: 'clientes/:cedula/progreso', component: ClienteProgresoComponent, canActivate: [AuthGuard] },
  { path: 'rutinas', component: RutinasComponent, canActivate: [AuthGuard] },
  { path: 'sesiones', component: SesionesComponent, canActivate: [AuthGuard] },
  { path: 'reportes', component: ReportesComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
