import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryComponent} from "./gallery/gallery.component";
import {GalleryImageComponent} from "./gallery/gallery-image/gallery-image.component";
import {FormsModule} from "@angular/forms";
import {InfiniteScrollModule} from "angular2-infinite-scroll";
import {ImageSliderComponent} from "./image-slider/image-slider.component";
import {LoadingIndicatorComponent} from "./loading-indicator/loading-indicator.component";
import {PostPreviewComponent} from "./post-preview/post-preview.component";
import {RouterModule} from "@angular/router";
import {PipesModule} from "../pipes/pipes.module";

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
        ImageSliderComponent,
        LoadingIndicatorComponent,
        PostPreviewComponent
    ],
    declarations: [
        GalleryComponent,
        GalleryImageComponent,
        ImageSliderComponent,
        LoadingIndicatorComponent,
        PostPreviewComponent
    ]
})
export class FragmentsModule {
}
