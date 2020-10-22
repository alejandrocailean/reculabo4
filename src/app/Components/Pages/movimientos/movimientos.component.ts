import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/DataService/Data.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {

  nombrePokemon;
  pokemonMov;
  detaMov:any[]=[];

  constructor(private route:ActivatedRoute, private datos:DataService) { }
  ngOnInit(): void {
    this.query();
    this.getPokemon();
  }

  getPokemon(){
    this.datos.getDatos('https://pokeapi.co/api/v2/pokemon/'+this.nombrePokemon)
    .subscribe(data=>{
      //console.log(data);
      this.pokemonMov=data["moves"]; 
      console.log(this.pokemonMov);
     for (let index = 0; index < this.pokemonMov.length; index++) {
       this.detaMov.push(this.pokemonMov[index]['version_group_details']);       
     }


      // for(let i=0;i<this.pokemonMov.length; i++){ 
      //   this.datos.getDatos (this.pokemonMov[i].ability.url)
      //   .subscribe(res=>{
      //     console.log(res["effect_entries"][i]["effect"]);
      //     console.log(Object.keys(res));          
      //   });
      // }
      
    }); 
  }

  query(){
    this.route.queryParams
    .subscribe(data=>{
      this.nombrePokemon=data.elegido;     
    });
  }

}
