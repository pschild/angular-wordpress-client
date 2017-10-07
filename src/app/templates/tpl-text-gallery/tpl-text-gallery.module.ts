import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TplTextGalleryComponent} from "./tpl-text-gallery.component";
import {TextModule} from "../../fragments/text/text.module";
import {TplGalleryModule} from "../tpl-gallery/tpl-gallery.module";

@NgModule({
    imports: [
        CommonModule,
        TextModule,
        TplGalleryModule
    ],
    declarations: [
        TplTextGalleryComponent
    ],
    exports: [
        TplTextGalleryComponent
    ]
})
export class TplTextGalleryModule {
}
