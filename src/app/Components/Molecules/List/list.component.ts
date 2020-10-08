import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from 'src/app/Services/DataService/Data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input () listado:any[];
  
  indice;
  h_menu:boolean;
  modificar={
    name:'',
    capital:'',
    region:'',
    subregion:'',
    languages:''
  };

  constructor(private datos:DataService) { }

  ngOnInit(): void {
    this.h_menu=true;
  }
  modificacion(i){
    this.h_menu=false;
    this.indice=i;  
    this.modificar=this.listado[i];    
  }

  detalle(seleccionado:string){
    this.datos.redirecciona('/detalle','elegido',seleccionado);
  }

  guardar(){
    this.listado.splice(this.indice,1,this.modificar);
    this.h_menu=true;
  }

}
