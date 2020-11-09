import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigLayoutComponent } from '../main/pages/config-layout/config-layout.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';


const routes: Routes = [
  {
    path: '',
    component: ConfigLayoutComponent,
    children: [
      { path: '', component: ProfilePageComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
