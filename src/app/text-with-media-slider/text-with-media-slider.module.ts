import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TplPostContentGalleryComponent} from "./tpl-post-content-gallery/tpl-post-content-gallery.component";
import {PipesModule} from "../shared/pipes/pipes.module";
import {MediaSliderModule} from "../media-slider/media-slider.module";

@NgModule({
    imports: [
        CommonModule,
        PipesModule,
        MediaSliderModule
    ],
    declarations: [
        TplPostContentGalleryComponent
    ],
    exports: [
        TplPostContentGalleryComponent
    ]
})
export class TextWithMediaSliderModule {
}
