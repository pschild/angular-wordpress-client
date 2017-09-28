import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryComponent} from "./gallery/gallery.component";
import {FormsModule} from "@angular/forms";
import {InfiniteScrollModule} from "angular2-infinite-scroll";
import {MediaSliderComponent} from "./media-slider/media-slider.component";
import {LoadingIndicatorComponent} from "./loading-indicator/loading-indicator.component";
import {PostPreviewComponent} from "./post-preview/post-preview.component";
import {RouterModule} from "@angular/router";
import {PipesModule} from "../pipes/pipes.module";
import {ImageComponent} from "./image/image.component";
import {VideoComponent} from "./video/video.component";
import {MediaComponent} from "./media/media.component";
import {TimelineItemComponent} from "./timeline-item/timeline-item.component";
import {ContentWithCodeblockComponent} from "./content-with-codeblock/content-with-codeblock.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        InfiniteScrollModule,
        RouterModule,
        PipesModule
    ],
    exports: [
        GalleryComponent,
        MediaSliderComponent,
        LoadingIndicatorComponent,
        PostPreviewComponent,
        ImageComponent,
        VideoComponent,
        TimelineItemComponent,
        ContentWithCodeblockComponent
    ],
    declarations: [
        GalleryComponent,
        MediaSliderComponent,
        LoadingIndicatorComponent,
        PostPreviewComponent,
        ImageComponent,
        VideoComponent,
        MediaComponent,
        TimelineItemComponent,
        ContentWithCodeblockComponent
    ]
})
export class FragmentsModule {
}
