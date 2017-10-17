import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent} from "./post/post.component";
import {PageComponent} from "./page/page.component";
import {NavigationModule} from "./navigation/navigation.module";
import {HeaderComponent} from "./header/header.component";
import {FormsModule} from "@angular/forms";
import {environment} from "../../environments/environment";

import {NGWT_CONFIG, NgwtConfig, TplGalleryModule, TplPostsModule, TplTextGalleryModule, TplTextMediaSliderModule, TplTextModule} from "ng-wordpress-templates";
import {NGWS_CONFIG, NgwsConfig, NgWordpressServicesModule} from "ng-wordpress-services";

export function ngwtConfigFactory(): NgwtConfig {
    return {
        apiUrl: environment.apiUrl,
        staticSharerUrl: environment.staticSharerUrl
    };
}

export function ngwsConfigFactory(): NgwsConfig {
    return {
        apiUrl: environment.apiUrl
    };
}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,

        NavigationModule,

        NgWordpressServicesModule.forRoot(),

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
        {
            provide: NGWT_CONFIG,
            useFactory: ngwtConfigFactory
        },
        {
            provide: NGWS_CONFIG,
            useFactory: ngwsConfigFactory
        }
    ]
})
export class CoreModule {
}
