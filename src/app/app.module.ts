import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {Ng2DeviceDetectorModule} from "ng2-device-detector";
import {AppComponent} from './app.component';
import {HttpModule} from "@angular/http";
import {CoreModule} from "./core/core.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        Ng2DeviceDetectorModule.forRoot(),

        CoreModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
