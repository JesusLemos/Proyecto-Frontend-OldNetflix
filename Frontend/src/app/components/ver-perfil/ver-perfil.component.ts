import { Component, OnInit } from '@angular/core';
// import { PerfilUsuario } from 'src/app/models/userProfile.model';
import { VerperfilService } from 'src/app/services/verperfil.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.scss']
})
export class VerPerfilComponent implements OnInit{
// perfil:PerfilUsuario={
//   usuario: ''
// };
usuario2=JSON.parse(localStorage.getItem('usuario'))
peliculasAlquiladas=JSON.parse(localStorage.getItem('pelisAlquiladas'))
  constructor(private verperfil:VerperfilService) { }
  // obtPerfil(){
    
  // }
  ngOnInit(){
    this.verperfil.obtPeliculasAlquiladas(this.usuario2.correo).subscribe(res => localStorage.setItem('pelisAlquiladas', JSON.stringify(res)))


}
}
