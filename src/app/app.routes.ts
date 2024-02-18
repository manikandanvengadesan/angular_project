import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { LoginComponentComponent } from './login-component/login-component.component';

export const routes: Routes = [
    {path:'users',component:UsersComponent},
    {path:'',component:LoginComponentComponent},
];
