import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Components/auth/sign-in/sign-in.component';
import { DashboardComponent } from './Components/modules/dashboard/dashboard.component';
import { AccountManagementComponent } from './Components/modules/user/account-management/account-management.component';
import { AccountManagementAddEditComponent } from './Components/modules/user/account-management/account-management-add-edit/account-management-add-edit.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'sign-in'},
  {path:'sign-in', component:SignInComponent},

  //User-Management
  { 
    path: 'user-management', 
    component: AccountManagementComponent,
  },

  {
    path: 'user-management/new',
    component: AccountManagementAddEditComponent
  },

  //Dashboard
  { path: 'dashboard', 
    component: DashboardComponent 
  },

  //User
  { path: 'user', 
    component: AccountManagementComponent 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
