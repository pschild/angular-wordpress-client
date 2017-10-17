import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent} from "./post/post.component";
import {PageComponent} from "./page/page.component";
import {NavigationModule} from "./navigation/navigation.module";
import {HeaderComponent} from "./header/header.component";
import {PageService} from "./page/page.service";
import {PostService} from "./post/post.service";
import {FormsModule} from "@angular/forms";
import {
    NGWT_CONFIG, NgwtConfig, TplGalleryModule, TplPostsModule, TplTextGalleryModule, TplTextMediaSliderModule,
    TplTextModule
} from "ng-wordpress-templates";
import {environment} from "../../environments/environment";

export function ngwtConfigFactory(): NgwtConfig {
    return {
        apiUrl: environment.apiUrl,
        staticSharerUrl: environment.staticSharerUrl
    };
}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,

        NavigationModule,

        TplTextModule.forRoot(),
        TplPostsModule.forRoot(),
        TplTextGalleryModule.forRoot(),
        TplTextMediaSliderModule.forRoot(),
        TplGalleryModule.forRoot()
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
        PageService,
        PostService,
        {
            provide: NGWT_CONFIG,
            useFactory: ngwtConfigFactory
        }
    ]
})
export class CoreModule {
}