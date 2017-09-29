import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryComponent} from "./gallery/gallery.component";
import {TplGalleryComponent} from "./tpl-gallery/tpl-gallery.component";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {InfiniteScrollModule} from "angular2-infinite-scroll";
import {PipesModule} from "../shared/pipes/pipes.module";

import 'hammerjs';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        InfiniteScrollModule,

        PipesModule,
        SharedModule
    ],
    declarations: [
        GalleryComponent,
        TplGalleryComponent
    ],
    exports: [
        GalleryComponent,
        TplGalleryComponent
    ]
})
export class GalleryModule {
}
