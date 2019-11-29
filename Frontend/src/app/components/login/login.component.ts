import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/models/login.model';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  usuario:Login={
    usuario:'',
    contrasenya:''
  }
  usuario2=JSON.parse(localStorage.getItem('usuario'))
  constructor(private login:LoginService, private router:Router) { }

  conectarme(){
    this.login.conectar(this.usuario)
    .subscribe(res =>  {localStorage.setItem('usuario', JSON.stringify(res)), setTimeout(() => {
      location.reload(true);
    }, 1000),  setTimeout(() => {
      this.router.navigate(['/discover'])
    }, 999)})

  }

}
