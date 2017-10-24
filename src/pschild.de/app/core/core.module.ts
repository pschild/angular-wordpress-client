import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent} from "./post/post.component";
import {PageComponent} from "./page/page.component";
import {NavigationModule} from "./navigation/navigation.module";
import {HeaderComponent} from "./header/header.component";
import {FormsModule} from "@angular/forms";
import {environment} from "../../environments/environment";

import {
    NgWordpressServicesModule,
    TplPostsModule,
    TplTextModule,
    TplProjectsModule,
    TplTimelineModule
} from "ng-wordpress-templates";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,

        NavigationModule,

        NgWordpressServicesModule.forRoot({
            apiUrl: environment.apiUrl,
            staticSharerUrl: environment.staticSharerUrl,
            menuName: environment.menuName
        }),

        TplTextModule,
        TplPostsModule,
        TplTimelineModule,
        TplProjectsModule
    ],
    declarations: [
        PostComponent,
        PageComponent,
        HeaderComponent
    ],
    exports: [
        PostComponent,
        PageComponent,
        HeaderComponent
    ],
    providers: [
    ]
})
export class CoreModule {
}
