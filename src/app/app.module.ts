import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageComponent} from "./page/page.component";
import {GalleryComponent} from "./fragments/gallery/gallery.component";
import {HeadlineComponent} from "./fragments/headline/headline.component";

@NgModule({
    declarations: [
        AppComponent,
        PageComponent,
        GalleryComponent,
        HeadlineComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
