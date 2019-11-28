import { Component, OnInit } from '@angular/core';
import { RegistroUsuario } from 'src/app/models/registro.model';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent  {
usuario:RegistroUsuario={
  usuario:'',
  nombre:'',
  apellido:'',
  correo:'',
  contrasenya:''
}
  constructor(private registro:RegistroService) { }
  crearRegistro(){
    this.registro.crearUsuario(this.usuario)
    .subscribe(res=> console.log('Se ha creado correctamente'))
  }
 

}
