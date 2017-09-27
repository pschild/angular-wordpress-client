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
        VideoComponent
    ],
    declarations: [
        GalleryComponent,
        MediaSliderComponent,
        LoadingIndicatorComponent,
        PostPreviewComponent,
        ImageComponent,
        VideoComponent
    ]
})
export class FragmentsModule {
}
