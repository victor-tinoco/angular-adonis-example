import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login/pages/login-page/login-page.component';
import { LoginFormComponent } from './login/components/login-form/login-form.component';
import { GuardService } from './login/services/guard/guard.service';
import { RoutePath } from './core/constants/route_paths';


const routes: Routes = [
  {
    path: '',
    redirectTo: RoutePath.login.path,
    pathMatch: 'full'
  },
  {
    path: RoutePath.login.path,
    component: LoginPageComponent,
    children: [
      { path: '', component: LoginFormComponent }
    ]
  },
  {
    path: RoutePath.forgotPassword.path,
    loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule'
  },
  {
    path: RoutePath.dashboard.path,
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canActivate: [GuardService]
  },
  {
    path: RoutePath.account.path,
    loadChildren: './account/account.module#AccountModule',
    canActivate: [GuardService]
  },
  {
    path: RoutePath.user.path,
    loadChildren: './user/user.module#UserModule',
    canActivate: [GuardService]
  },
  {
    path: RoutePath.field.path,
    loadChildren: './auxiliaries/auxiliaries.module#AuxiliariesModule',
    canActivate: [GuardService]
  },
  // {
  //   path: '**', component: Error404Component
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
