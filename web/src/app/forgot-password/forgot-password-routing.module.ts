import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { FirstStepComponent } from './components/first-step/first-step.component';
import { SecondStepComponent } from './components/second-step/second-step.component';
import { ThirdStepComponent } from './components/third-step/third-step.component';
import { RoutePath } from '../core/constants/route_paths';


const routes: Routes = [
  { path: '', redirectTo: RoutePath.forgotPasswordST1.toRedirect, pathMatch: 'full' },
  {
    path: '',
    component: ForgotPasswordPageComponent,
    children: [
      { path: 'step-1', component: FirstStepComponent },
      { path: 'step-2', component: SecondStepComponent },
      { path: 'step-3', component: ThirdStepComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotPasswordRoutingModule { }
