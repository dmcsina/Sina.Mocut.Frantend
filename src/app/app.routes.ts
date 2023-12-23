import { Routes } from '@angular/router';
import { HomeComponent} from './View/pages/home/home.component';
import { LoginComponent} from './View/pages/login/login.component';
import { CheckComponent} from './View/componets/check/check.component';
import { CodeComponent} from './View/componets/code/code.component';
import { InformationComponent} from './View/componets/information/information.component';
import { SinginComponent} from './View/componets/singin/singin.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent,
    children:[
      {path:'',component:CheckComponent},
      {path:'check',component:CheckComponent},
      {path:'code',component:CodeComponent},
      {path:'singup',component:InformationComponent},
      {path:'singin',component:SinginComponent},
    ]
    },
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'**',redirectTo :'/home',pathMatch:'full'},
];
