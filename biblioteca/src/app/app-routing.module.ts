import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LibroComponent } from "./componentes/libro/libro.component";
import { LoginComponent } from "./componentes/login/login.component";
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
    {path: '**', component: PrincipalComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }