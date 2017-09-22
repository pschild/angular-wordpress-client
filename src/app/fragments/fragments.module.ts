import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryComponent} from "./gallery/gallery.component";
import {FormsModule} from "@angular/forms";
import {InfiniteScrollModule} from "angular2-infinite-scroll";
import {ImageSliderComponent} from "./image-slider/image-slider.component";
import {LoadingIndicatorComponent} from "./loading-indicator/loading-indicator.component";
import {PostPreviewComponent} from "./post-preview/post-preview.component";
import {RouterModule} from "@angular/router";
import {PipesModule} from "../pipes/pipes.module";
import {ImageComponent} from "./image/image.component";

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
        PostPreviewComponent,
        ImageComponent
    ],
    declarations: [
        GalleryComponent,
        ImageSliderComponent,
        LoadingIndicatorComponent,
        PostPreviewComponent,
        ImageComponent
    ]
})
export class FragmentsModule {
}
