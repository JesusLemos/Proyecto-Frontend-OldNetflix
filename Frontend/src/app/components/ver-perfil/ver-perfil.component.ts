import { Component, OnInit } from '@angular/core';
import { PerfilUsuario } from 'src/app/models/userProfile.model';
import { VerperfilService } from 'src/app/services/verperfil.service';

@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.scss']
})
export class VerPerfilComponent {
perfil:PerfilUsuario={
  token: ''
};
  constructor(private verperfil:VerperfilService) { }

  obtPerfil(){
    this.verperfil.obtPerfil(this.perfil)
    .subscribe(res => console.log(res))
  }

}
