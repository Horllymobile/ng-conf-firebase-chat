import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { InputComponent } from './components/input/input.component';
import { MessageComponent } from './components/message/message.component';

const config = {
  apiKey: 'AIzaSyA-qzZZ5GXSY51qXbsF9xigZfzI89TpS7Y',
  authDomain: 'ng-conf-firebase-sample-app.firebaseapp.com',
  databaseURL: 'https://ng-conf-firebase-sample-app.firebaseio.com',
  projectId: 'ng-conf-firebase-sample-app',
  storageBucket: 'ng-conf-firebase-sample-app.appspot.com',
  messagingSenderId: '30442974921'
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent,
    ChatComponent,
    InputComponent,
    MessageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
