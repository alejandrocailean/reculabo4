import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/DataService/Data.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  
  @Input() listado:any[];
  @Input() titulo:string;
  poke;

  constructor(private datos: DataService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.listado);
  }  

  detalle(seleccionado:string){
    this.router.navigate(["detalle"],{queryParams:{elegido:seleccionado}})    
    .catch(e=>{
      console.log(e);
      
    });

  }

  movimiento(seleccionado:string){
    this.router.navigate(["moves"],{queryParams:{elegido:seleccionado}})    
    .catch(e=>{
      console.log(e);
      
    });

  }
}


