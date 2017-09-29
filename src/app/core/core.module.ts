import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplateComponent} from "./template/template.component";
import {PostComponent} from "./post/post.component";
import {PageComponent} from "./page/page.component";
import {NavigationModule} from "./navigation/navigation.module";
import {HeaderComponent} from "./header/header.component";
import {PageService} from "./page/page.service";
import {PostService} from "./post/post.service";
import {GalleryModule} from "../gallery/gallery.module";
import {TextModule} from "../text/text.module";
import {TextWithGalleryModule} from "../text-with-gallery/text-with-gallery.module";
import {ProjectsModule} from "../projects/projects.module";
import {PostsModule} from "../posts/posts.module";
import {TimelineModule} from "../timeline/timeline.module";
import {CodeblockModule} from "../codeblock/codeblock.module";
import {TextWithMediaSliderModule} from "../text-with-media-slider/text-with-media-slider.module";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,

        NavigationModule,
        GalleryModule,
        TextModule,
        TextWithGalleryModule,
        ProjectsModule,
        PostsModule,
        TimelineModule,
        CodeblockModule,
        TextWithMediaSliderModule
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
