import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


import {LoginComponent} from '../app/Components/Pages/login/login.component'
import { LoginService } from './Services/LoginService/login.service';
import { GridComponent } from './Components/Molecules/Grid/Grid.component';
import { FooterComponent } from './Components/Organisms/Footer/Footer.component';
import { NavComponent } from './Components/Organisms/Nav/Nav.component';
import { DataService } from './Services/DataService/Data.service';
import { NotFoundComponent } from './Components/Pages/not-found/not-found.component';
import { ListadoComponent } from './Components/Pages/listado/listado.component';
import { DetalleComponent } from './Components/Pages/detalle/detalle.component';
import { MovimientosComponent } from './Components/Pages/movimientos/movimientos.component';



@NgModule({
  declarations: [
    AppComponent,
    GridComponent,    
    FooterComponent,
    NavComponent,     
    NotFoundComponent,
    ListadoComponent,
    DetalleComponent,
    LoginComponent,
    MovimientosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule

  ],
  providers: [HttpClient, DataService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
