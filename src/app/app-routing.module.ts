import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './Components/Pages/detalle/detalle.component';
import { ListadoComponent } from './Components/Pages/listado/listado.component';
import { NotFoundComponent } from './Components/Pages/not-found/not-found.component';

const routes: Routes = [
  {path:'',component:ListadoComponent},
  {path:"detalle",component:DetalleComponent},  
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
