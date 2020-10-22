import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private  auth: AngularFireAuth,private router: Router) { }

  async login(usuario,password){
    try {
      
      const rta = await this.auth.signInWithEmailAndPassword(usuario,password);
      //console.log(rta);      
      localStorage.setItem('logged','true');
      //const user = firebase.auth().currentUser
      //console.log((await user.getIdTokenResult()).token);
      this.router.navigateByUrl("");
            
    } catch (error) {
      console.log(error);
      const user = firebase.auth().currentUser
      console.log(user);
    }
  }

  async signOut(){
    firebase.auth().signOut() ;
      // Sign-out successful.
      console.log('Te deslogueastes!');
      localStorage.setItem('logged','false');
    
  }

  view(){
    try{
    const user = firebase.auth().currentUser;
    console.log(user);
    }
    catch(e){
      console.log(e);
    }
  } 


}
