import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TplTextGalleryComponent} from "./tpl-text-gallery/tpl-text-gallery.component";
import {PipesModule} from "../shared/pipes/pipes.module";
import {GalleryModule} from "../gallery/gallery.module";

@NgModule({
    imports: [
        CommonModule,
        PipesModule,
        GalleryModule
    ],
    declarations: [
        TplTextGalleryComponent
    ],
    exports: [
        TplTextGalleryComponent
    ]
})
export class TextWithGalleryModule {
}
