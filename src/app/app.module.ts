import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { LoginForm } from './Forms/login/login.form';
import { HeaderNav } from './Shared/header/header.nav';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire/compat';
import { Environment } from './environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginForm,
    HeaderNav,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(Environment.FirebaseConfig)    
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"waterirrigationsystem-9b86e","appId":"1:234960383571:web:94fd809147a46c4726a0a6","databaseURL":"https://waterirrigationsystem-9b86e-default-rtdb.firebaseio.com","storageBucket":"waterirrigationsystem-9b86e.appspot.com","apiKey":"AIzaSyCbsRNDelghIYcFNUecodEnOZGOJ58Z2kM","authDomain":"waterirrigationsystem-9b86e.firebaseapp.com","messagingSenderId":"234960383571"})),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
