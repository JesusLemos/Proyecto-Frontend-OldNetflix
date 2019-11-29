import { Component, OnInit } from '@angular/core';
import { PerfilUsuario } from 'src/app/models/userProfile.model';
import { VerperfilService } from 'src/app/services/verperfil.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.scss']
})
export class VerPerfilComponent {
perfil:PerfilUsuario={
  usuario: ''
};
usuario={}
  constructor(private verperfil:VerperfilService) { }
  obtPerfil(){
    this.verperfil.obtPerfil(this.perfil)
    .subscribe(res => this.usuario=res)
  }

}
