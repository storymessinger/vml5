import { NewsMediaService } from './services/news-media.service';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import {firebaseConfig} from "../environments/firebase.config";
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {RouterModule} from '@angular/router';
import {routerConfig} from "./router.config";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routerConfig),
    ReactiveFormsModule
  ],
  providers: [NewsMediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
