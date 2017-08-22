import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TplGalleryComponent} from "./tpl-gallery/tpl-gallery.component";
import {TplTextGalleryComponent} from "./tpl-text-gallery/tpl-text-gallery.component";
import {TplTextComponent} from "./tpl-text/tpl-text.component";
import {FragmentsModule} from "../fragments/fragments.module";
import {SafeHtmlPipe} from "../pipes/safe-html.pipe";

@NgModule({
    imports: [
        CommonModule,
        FragmentsModule
    ],
    exports: [
        TplTextComponent,
        TplTextGalleryComponent,
        TplGalleryComponent
    ],
    declarations: [
        TplTextComponent,
        TplTextGalleryComponent,
        TplGalleryComponent,
        SafeHtmlPipe
    ]
})
export class PageTemplatesModule {
}
