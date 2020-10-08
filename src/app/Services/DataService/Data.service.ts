import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
 
constructor(protected http: HttpClient, private router:Router) { }


  getDatos(url){
    return this.http.get(url);
  }

  redirecciona(url:string,key:string,value:string){
    this.router.navigate([url],{queryParams:{[key]:[value]}})    
    .catch(e=>{
      console.log(e);
    });
  } 

  /*
      colocar en el constructor

      private datos:DataService

  */

  /*  
    Colocar en el ngOnit

    this.datos.getDatos('url')
      .subscribe(
        (data)=>{
          this.variableLocal=data;        
        }
      );
  */


}
