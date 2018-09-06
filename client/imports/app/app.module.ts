import {NgModule, ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        IonicModule.forRoot(AppComponent),
        BrowserModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        AppComponent
    ],
    providers: [{
         provide: ErrorHandler, useClass: IonicErrorHandler 
    }]
})

export class AppModule {}