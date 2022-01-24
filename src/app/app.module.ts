import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//ngBootstrap
import { NgbAlertModule, NgbModalConfig, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

//ChartJS
import { ChartModule } from 'angular2-chartjs';

//HTTP Module
import { HttpClientModule } from '@angular/common/http';

//Form Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Constant Service
import { ConstantService } from './services/common/constant.service';

import { FeLayoutComponent } from './layouts/fe-layout/fe-layout.component';
import { BeLayoutComponent } from './layouts/be-layout/be-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HomeComponent } from './pages/fe/home/home.component';
import { ContactComponent } from './pages/fe/contact/contact.component';
import { AboutComponent } from './pages/fe/about/about.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ForgotpassComponent } from './pages/auth/forgotpass/forgotpass.component';
import { DashboardComponent } from './pages/be/dashboard/dashboard.component';
import { CategoryComponent } from './pages/be/category/category.component';
import { ProductComponent } from './pages/be/product/product.component';
import { ReportComponent } from './pages/be/report/report.component';
import { UsersComponent } from './pages/be/users/users.component';
import { SettingComponent } from './pages/be/setting/setting.component';
import { HeaderFeComponent } from './shared/fe/header-fe/header-fe.component';
import { FooterFeComponent } from './shared/fe/footer-fe/footer-fe.component';
import { FooterBeComponent } from './shared/be/footer-be/footer-be.component';
import { HeaderBeComponent } from './shared/be/header-be/header-be.component';
import { SidebarBeComponent } from './shared/be/sidebar-be/sidebar-be.component';

@NgModule({
  declarations: [
    AppComponent,
    FeLayoutComponent,
    BeLayoutComponent,
    AuthLayoutComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpassComponent,
    DashboardComponent,
    CategoryComponent,
    ProductComponent,
    ReportComponent,
    UsersComponent,
    SettingComponent,
    HeaderFeComponent,
    FooterFeComponent,
    FooterBeComponent,
    HeaderBeComponent,
    SidebarBeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbAlertModule,
    NgbModule,
    NgbPaginationModule,
    ChartModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [NgbModalConfig, ConstantService],
  bootstrap: [AppComponent]
})
export class AppModule { }