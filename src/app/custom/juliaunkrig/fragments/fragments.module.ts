import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {InfiniteScrollModule} from "angular2-infinite-scroll";
import {RouterModule} from "@angular/router";
import {PipesModule} from "../../../pipes/pipes.module";
import {GalleryComponent} from "../../../fragments/gallery/gallery.component";
import {MediaSliderComponent} from "../../../fragments/media-slider/media-slider.component";
import {LoadingIndicatorComponent} from "../../../fragments/loading-indicator/loading-indicator.component";
import {PostPreviewComponent} from "../../../fragments/post-preview/post-preview.component";
import {ImageComponent} from "../../../fragments/image/image.component";
import {VideoComponent} from "../../../fragments/video/video.component";
import {MediaComponent} from "../../../fragments/media/media.component";

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
        VideoComponent,
        MediaComponent
    ]
})
export class FragmentsModule {
}
