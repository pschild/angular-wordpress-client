import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplateComponent} from "./template/template.component";
import {PostComponent} from "./post/post.component";
import {PageComponent} from "./page/page.component";
import {NavigationModule} from "./navigation/navigation.module";
import {HeaderComponent} from "./header/header.component";
import {PageService} from "./page/page.service";
import {PostService} from "./post/post.service";
import {FormsModule} from "@angular/forms";
import {TplGalleryModule} from "../templates/tpl-gallery/tpl-gallery.module";
import {TplTextModule} from "../templates/tpl-text/tpl-text.module";
import {TplTextMediaSliderModule} from "../templates/tpl-text-media-slider/tpl-text-media-slider.module";
import {TplTextGalleryModule} from "../templates/tpl-text-gallery/tpl-text-gallery.module";
import {TplProjectsModule} from "../templates/tpl-projects/tpl-projects.module";
import {TplPostsModule} from "../templates/tpl-posts/tpl-posts.module";
import {TplTimelineModule} from "../templates/tpl-timeline/tpl-timeline.module";
import {TplCodeblocksModule} from "../templates/tpl-codeblocks/tpl-codeblocks.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,

        NavigationModule,

        TplGalleryModule,
        TplTextModule,
        TplTextMediaSliderModule,
        TplTextGalleryModule,
        TplProjectsModule,
        TplPostsModule,
        TplTimelineModule,
        TplCodeblocksModule
    ],
    declarations: [
        TemplateComponent,
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
        PostService
    ]
})
export class CoreModule {
}
