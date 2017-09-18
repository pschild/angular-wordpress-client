import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryComponent} from "./gallery/gallery.component";
import {GalleryImageComponent} from "./gallery/gallery-image/gallery-image.component";
import {FormsModule} from "@angular/forms";
import {InfiniteScrollModule} from "angular2-infinite-scroll";
import {ImageSliderComponent} from "./image-slider/image-slider.component";
import {LoadingIndicatorComponent} from "./loading-indicator/loading-indicator.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        InfiniteScrollModule
    ],
    exports: [
        GalleryComponent,
        ImageSliderComponent,
        LoadingIndicatorComponent
    ],
    declarations: [
        GalleryComponent,
        GalleryImageComponent,
        ImageSliderComponent,
        LoadingIndicatorComponent
    ]
})
export class FragmentsModule {
}
