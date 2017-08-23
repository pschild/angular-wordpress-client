import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryComponent} from "./gallery/gallery.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
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
