import { Component, OnInit } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import{LoginService} from '../../../Services/LoginService/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:string;
  password:string;
  h_menu:boolean;

  constructor(private login:LoginService) { }

  ngOnInit(): void {
    if(localStorage.getItem("logged")==="false"){
      this.h_menu=false;
    }else this.h_menu=true;
  }  

  loguearte(){
    this.login.login(this.usuario,this.password);
  }

  desloguearte(){
    this.login.signOut();
    this.h_menu=false;
  }

  verLogueado(){
    this.login.view();
  }
  
}
