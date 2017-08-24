import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryComponent} from "./gallery/gallery.component";
import {FormsModule} from "@angular/forms";
import {InfiniteScrollModule} from "angular2-infinite-scroll";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        InfiniteScrollModule
    ],
    exports: [
        GalleryComponent
    ],
    declarations: [
        GalleryComponent
    ]
})
export class FragmentsModule {
}
