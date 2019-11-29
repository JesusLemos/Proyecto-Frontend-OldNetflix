import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodasLasPeliculasComponent } from './components/todas-las-peliculas/todas-las-peliculas.component';
import { HeaderComponent } from './components/header/header.component';
import { VerPerfilComponent } from './components/ver-perfil/ver-perfil.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FiltroidComponent } from './components/filtroid/filtroid.component';
import { FiltrotituloComponent } from './components/filtrotitulo/filtrotitulo.component';
import { FiltrogeneroComponent } from './components/filtrogenero/filtrogenero.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    TodasLasPeliculasComponent,
    HeaderComponent,
    VerPerfilComponent,
    LoginComponent,
    RegistroComponent,
    FiltroidComponent,
    FiltrotituloComponent,
    FiltrogeneroComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
