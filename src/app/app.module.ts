import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNav } from './Shared/header/header.nav';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire/compat';
import { Environment } from './environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SignInComponent } from './Components/auth/sign-in/sign-in.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './Components/modules/dashboard/dashboard.component';
import { SideNavbarComponent } from './Shared/navigations/side-navbar/side-navbar.component';
import { AccountManagementComponent } from './Components/modules/user/account-management/account-management.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNav,
    SignInComponent,
    DashboardComponent,
    SideNavbarComponent,
    AccountManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(Environment.FirebaseConfig),
    
    //Form Modules
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"waterirrigationsystem-9b86e","appId":"1:234960383571:web:94fd809147a46c4726a0a6","databaseURL":"https://waterirrigationsystem-9b86e-default-rtdb.firebaseio.com","storageBucket":"waterirrigationsystem-9b86e.appspot.com","apiKey":"AIzaSyCbsRNDelghIYcFNUecodEnOZGOJ58Z2kM","authDomain":"waterirrigationsystem-9b86e.firebaseapp.com","messagingSenderId":"234960383571"})),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
