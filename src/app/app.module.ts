import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageComponent} from "./page/page.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {NavigationService} from "./navigation/navigation.service";
import {HttpModule} from "@angular/http";
import {NavigationTreeComponent} from "./navigation/navigation-tree/navigation-tree.component";
import {PageTemplatesModule} from "./templates/page-templates.module";
import {PageService} from "./page/page.service";

@NgModule({
    declarations: [
        AppComponent,
        PageComponent,
        NavigationComponent,
        NavigationTreeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        PageTemplatesModule
    ],
    providers: [
        NavigationService,
        PageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
