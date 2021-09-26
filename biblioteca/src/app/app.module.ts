import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LibroComponent } from './componentes/libro/libro.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { UsersComponent } from './componentes/users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HistorialComponent } from './componentes/historial/historial.component';
import { PrestadosComponent } from './componentes/prestados/prestados.component';
import { GraficasComponent } from './componentes/graficas/graficas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PrincipalComponent,
    NavbarComponent,
    LibroComponent,
    ProfileComponent,
    UsersComponent,
    HistorialComponent,
    PrestadosComponent,
    GraficasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
