import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { APP_ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { AuthGuard } from "./guards/auth-guard.service";
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    HomeModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
