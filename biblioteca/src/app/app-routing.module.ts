import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GraficasComponent } from "./componentes/graficas/graficas.component";
import { HistorialComponent } from "./componentes/historial/historial.component";
import { LibroComponent } from "./componentes/libro/libro.component";
import { LoginComponent } from "./componentes/login/login.component";
import { PrestadosComponent } from "./componentes/prestados/prestados.component";
import { PrincipalComponent } from "./componentes/principal/principal.component";
import { ProfileComponent } from "./componentes/profile/profile.component";
import { RegisterComponent } from "./componentes/register/register.component";
import { UsersComponent } from "./componentes/users/users.component";

const routes: Routes =[
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'users', component: UsersComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'home', component: PrincipalComponent},
    {path: 'ebook', component: LibroComponent},
    {path: 'history', component: HistorialComponent},
    {path: 'prestados', component: PrestadosComponent},
    {path: 'graficas', component: GraficasComponent},
    {path: '**', component: PrincipalComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }