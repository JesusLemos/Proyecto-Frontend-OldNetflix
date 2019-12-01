import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodasLasPeliculasComponent } from './components/todas-las-peliculas/todas-las-peliculas.component';
import { VerPerfilComponent } from './components/ver-perfil/ver-perfil.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FiltroidComponent } from './components/filtroid/filtroid.component';
import { FiltrogeneroComponent } from './components/filtrogenero/filtrogenero.component';
import { FiltrotituloComponent } from './components/filtrotitulo/filtrotitulo.component';
import { MostrartodaslaspopularesComponent } from './components/mostrartodaslaspopulares/mostrartodaslaspopulares.component';
import { InfomacionpeliculaComponent } from './components/infomacionpelicula/infomacionpelicula.component'
import { AlquilarpeliculasComponent } from './components/alquilarpeliculas/alquilarpeliculas.component';


const routes: Routes = [
  {path:"", redirectTo:"discover", pathMatch:"full"},
  {path:"discover",  component:TodasLasPeliculasComponent },
  {path:"usuarios/verperfil", component:VerPerfilComponent},
  {path:"usuarios/login", component:LoginComponent},
  {path:"usuarios/registro", component:RegistroComponent},
  {path:"peliculas/peliculaid", component:FiltroidComponent},
  {path:"peliculas/genero", component:FiltrogeneroComponent},
  {path:"peliculas/titulo", component:FiltrotituloComponent},
  {path:"peliculas/peliculaspopulares", component: MostrartodaslaspopularesComponent},
    {path:"alquilarpeliculas", component:AlquilarpeliculasComponent},
    {path:"peliculas/peliculasinfo", component:InfomacionpeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
