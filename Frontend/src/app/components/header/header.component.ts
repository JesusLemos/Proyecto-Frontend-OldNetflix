import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DesconectarService } from 'src/app/services/desconectar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  usuario2=JSON.parse(localStorage.getItem('usuario'))
  constructor(private login:LoginService, private nologin:DesconectarService) { }

  prueba(){
    this.nologin.desconectarUsuario(this.usuario2).subscribe(res => console.log('He llegado hasta aqui') )
    localStorage.clear()
  }



}
