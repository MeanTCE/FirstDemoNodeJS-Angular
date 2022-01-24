import { ContactComponent } from './pages/fe/contact/contact.component';
import { HomeComponent } from './pages/fe/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeLayoutComponent } from './layouts/fe-layout/fe-layout.component';
import { AboutComponent } from './pages/fe/about/about.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ForgotpassComponent } from './pages/auth/forgotpass/forgotpass.component';
import { BeLayoutComponent } from './layouts/be-layout/be-layout.component';
import { DashboardComponent } from './pages/be/dashboard/dashboard.component';
import { CategoryComponent } from './pages/be/category/category.component';
import { ProductComponent } from './pages/be/product/product.component';
import { ReportComponent } from './pages/be/report/report.component';
import { SettingComponent } from './pages/be/setting/setting.component';
import { UsersComponent } from './pages/be/users/users.component';

const routes: Routes = [
  //route FE-layouts
  {
    path:'',
    component: FeLayoutComponent,
    children:[
      {
        path:'',
        component:HomeComponent,
        pathMatch:'full'
      },
      {
        path:'about',
        component:AboutComponent,
      },
      {
        path:'contact',
        component:ContactComponent,
      }
    ]
  },
  //route auth layout
  {
    path:'auth',
    component: AuthLayoutComponent,
    children:[
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'forgotpass',
        component: ForgotpassComponent
      }
    ]
  },
  //route be layout
  {
    path:'be',
    component: BeLayoutComponent,
    children:[
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'category',
        component: CategoryComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'report',
        component: ReportComponent
      },
      {
        path: 'setting',
        component: SettingComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
