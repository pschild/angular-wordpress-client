import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TplTextGalleryComponent} from "./tpl-text-gallery/tpl-text-gallery.component";
import {PipesModule} from "../shared/pipes/pipes.module";
import {GalleryModule} from "../gallery/gallery.module";
import {TextModule} from "../text/text.module";

@NgModule({
    imports: [
        CommonModule,
        PipesModule,
        GalleryModule,
        TextModule
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
