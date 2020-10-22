import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './Components/Guards/login.guard';
import { DetalleComponent } from './Components/Pages/detalle/detalle.component';
import { ListadoComponent } from './Components/Pages/listado/listado.component';
import { LoginComponent } from './Components/Pages/login/login.component';
import { MovimientosComponent } from './Components/Pages/movimientos/movimientos.component';
import { NotFoundComponent } from './Components/Pages/not-found/not-found.component';

const routes: Routes = [
  {path:'',component:ListadoComponent},
  {path:"detalle",component:DetalleComponent,canActivate:[LoginGuard]},  
  {path:"moves",component:MovimientosComponent,canActivate:[LoginGuard]},  
  {path:"login",component:LoginComponent},  
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
