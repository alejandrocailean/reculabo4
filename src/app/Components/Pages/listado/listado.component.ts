import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/DataService/Data.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  
pokemones:any;
  constructor(private datos:DataService) { }

  ngOnInit(): void {
    
    this.datos.getDatos('https://pokeapi.co/api/v2/pokemon/')
    .subscribe(
      res=>{
        this.pokemones=res["results"];
        console.log(this.pokemones);
      }
    );
    
  }


  // getpokemones(){
    
  //   for(let i= 1; i <= 150; i++) {

  //     this.datos.getDatos('https://pokeapi.co/api/v2/pokemon/'+i)
  //     .subscribe(
  //       res=>{
  //         this.pokemones.push(res);
  //       }
  //     );
  //   }
  // }
}
