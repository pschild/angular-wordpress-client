import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageComponent} from "./page/page.component";
import {GalleryComponent} from "./fragments/gallery/gallery.component";
import {HeadlineComponent} from "./fragments/headline/headline.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {NavigationService} from "./navigation/navigation.service";
import {HttpModule} from "@angular/http";
import {NavigationTreeComponent} from "./navigation/navigation-tree/navigation-tree.component";

@NgModule({
    declarations: [
        AppComponent,
        PageComponent,
        GalleryComponent,
        HeadlineComponent,
        NavigationComponent,
        NavigationTreeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule
    ],
    providers: [
        NavigationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
