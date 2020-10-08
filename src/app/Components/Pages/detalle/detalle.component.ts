import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/DataService/Data.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  nombrePokemon;
  pokemonHab;
  pokemonImg:any[]=[];
  

  constructor(private route:ActivatedRoute, private datos:DataService) { }

  ngOnInit(): void {
     this.query();
    this.getPokemon();
  }

  getPokemon(){
    this.datos.getDatos('https://pokeapi.co/api/v2/pokemon/'+this.nombrePokemon)
    .subscribe(data=>{
      console.log(data);
      this.pokemonHab=data["abilities"]; 
      this.pokemonImg.push (data["sprites"]["front_shiny"]);    
      this.pokemonImg.push (data["sprites"]["back_shiny"]);   
      console.log(this.pokemonHab[0].ability.url);   
    }); 
  }

  query(){
    this.route.queryParams
    .subscribe(data=>{
      this.nombrePokemon=data.elegido;     
    });
  }

}
