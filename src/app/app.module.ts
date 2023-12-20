import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDrawerContent } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule, DatePipe } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import {getDatabase, provideDatabase } from '@angular/fire/database';
import {MatButtonModule} from '@angular/material/button';
import { CustomSidenavComponent } from './custom-sidenav/custom-sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestsComponent } from './requests/requests.component'
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    CustomSidenavComponent,
    DashboardComponent,
    RequestsComponent,
    LoginpageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatInputModule,
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    provideFirebaseApp(() => initializeApp({  apiKey: "AIzaSyBotEtJjejZoKco6YAQiqsdTHyutFD92yw",
    
    authDomain: "wingman-874c0.firebaseapp.com",
    databaseURL: "https://wingman-874c0-default-rtdb.firebaseio.com",
    projectId: "wingman-874c0",
    storageBucket: "wingman-874c0.appspot.com",
    messagingSenderId: "120040393155",
    appId: "1:120040393155:web:5fdfa283ba92b50aa39576",
    measurementId: "G-KSX4FN8339" })),
    provideDatabase(() => getDatabase()),
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
