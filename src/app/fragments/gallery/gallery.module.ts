import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {GalleryComponent} from "./gallery.component";
import {PipesModule} from "../../shared/pipes/pipes.module";
import {InfiniteScrollModule} from "angular2-infinite-scroll";

import 'hammerjs';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        PipesModule,
        InfiniteScrollModule
    ],
    declarations: [
        GalleryComponent
    ],
    exports: [
        GalleryComponent
    ]
})
export class GalleryModule {
}