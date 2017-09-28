import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {Ng2DeviceDetectorModule} from "ng2-device-detector";
import {AppComponent} from './app.component';
import {PageComponent} from "./page/page.component";
import {PostComponent} from "./post/post.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {NavigationService} from "./navigation/navigation.service";
import {HttpModule} from "@angular/http";
import {NavigationTreeComponent} from "./navigation/navigation-tree/navigation-tree.component";
import {PageTemplatesModule} from "./templates/page-templates.module";
import {HeaderComponent} from "./header/header.component";
import {PageService} from "./page/page.service";
import {MediaService} from "./media.service";
import {PostService} from "./post/post.service";
import {TimelineService} from "./fragments/timeline-item/timeline.service";

import 'hammerjs';
import {ProjectService} from "./fragments/project-item/project.service";

@NgModule({
    declarations: [
        AppComponent,
        PageComponent,
        NavigationComponent,
        NavigationTreeComponent,
        HeaderComponent,
        PostComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        PageTemplatesModule,
        Ng2DeviceDetectorModule.forRoot()
    ],
    providers: [
        NavigationService,
        PageService,
        MediaService,
        PostService,
        TimelineService,
        ProjectService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
