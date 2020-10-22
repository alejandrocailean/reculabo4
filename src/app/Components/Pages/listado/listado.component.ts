import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/DataService/Data.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  
  pokemones:any;
  url:any[]=[];
  aux:any[]=[];
  

  constructor(private datos:DataService) { }

  ngOnInit(): void {
    
    this.datos.getDatos('https://pokeapi.co/api/v2/pokemon/')
    .subscribe(
      res=>{
        this.pokemones=res["results"];
       // console.log(this.pokemones);
        for (let index = 0; index < this.pokemones.length; index++) {
          this.url.push( this.pokemones[index].url);
          this.datos.getDatos(this.url[index]).subscribe(
            data=>{
                //console.log(data['name']);
                this.aux[index]={
                  name:data["name"],
                  peso:data["weight"],
                  altura:data["height"],
                  foto:data["sprites"]["front_shiny"]
                }
               // console.log(this.aux[index]);
          });            
        }
       
      }
    );
    
    
    
  }  
}
