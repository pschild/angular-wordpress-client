import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryComponent} from "./gallery/gallery.component";

@NgModule({
    imports: [
        CommonModule
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
