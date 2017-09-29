import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {Ng2DeviceDetectorModule} from "ng2-device-detector";
import {HttpModule} from "@angular/http";
import {AppComponent} from "../../app.component";
import {PageComponent} from "../../page/page.component";
import {NavigationComponent} from "../../navigation/navigation.component";
import {NavigationTreeComponent} from "../../navigation/navigation-tree/navigation-tree.component";
import {HeaderComponent} from "../../header/header.component";
import {PostComponent} from "../../post/post.component";
import {AppRoutingModule} from "../../app-routing.module";
import {PageTemplatesModule} from "./templates/page-templates.module";
import {NavigationService} from "../../navigation/navigation.service";
import {PageService} from "../../page/page.service";
import {MediaService} from "../../media.service";
import {PostService} from "../../post/post.service";
import {TimelineService} from "../../fragments/timeline-item/timeline.service";
import {ProjectService} from "../../fragments/project-item/project.service";

import 'hammerjs';

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
export class AppPschildModule {
}
