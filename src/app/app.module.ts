import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { GridComponent } from './Components/Molecules/Grid/Grid.component';
import { FooterComponent } from './Components/Organisms/Footer/Footer.component';
import { NavComponent } from './Components/Organisms/Nav/Nav.component';
import { DataService } from './Services/DataService/Data.service';
import { ListComponent } from './Components/Molecules/List/list.component';
import { NotFoundComponent } from './Components/Pages/not-found/not-found.component';
import { ListadoComponent } from './Components/Pages/listado/listado.component';
import { DetalleComponent } from './Components/Pages/detalle/detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,    
    FooterComponent,
    NavComponent,
    ListComponent,  
    NotFoundComponent,
    ListadoComponent,
    DetalleComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule

  ],
  providers: [HttpClient, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
