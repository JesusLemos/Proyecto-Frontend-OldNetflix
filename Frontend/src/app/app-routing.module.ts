import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodasLasPeliculasComponent } from './components/todas-las-peliculas/todas-las-peliculas.component';
import { VerPerfilComponent } from './components/ver-perfil/ver-perfil.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FiltroidComponent } from './components/filtroid/filtroid.component';


const routes: Routes = [
  {path:"", redirectTo:"discover", pathMatch:"full"},
  {path:"discover",  component:TodasLasPeliculasComponent },
  {path:"usuarios/verperfil", component:VerPerfilComponent},
  {path:"usuarios/login", component:LoginComponent},
  {path:"usuarios/registro", component:RegistroComponent},
  {path:"peliculas/peliculaid", component:FiltroidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
