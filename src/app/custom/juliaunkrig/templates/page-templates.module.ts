import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FragmentsModule} from "../fragments/fragments.module";
import {PipesModule} from "../../../pipes/pipes.module";
import {TplTextComponent} from "../../../templates/page/tpl-text/tpl-text.component";
import {TplTextGalleryComponent} from "../../../templates/page/tpl-text-gallery/tpl-text-gallery.component";
import {TplGalleryComponent} from "../../../templates/page/tpl-gallery/tpl-gallery.component";
import {TplPostsComponent} from "../../../templates/page/tpl-posts/tpl-posts.component";
import {TplPostContentGalleryComponent} from "../../../templates/post/tpl-post-content-gallery/tpl-post-content-gallery.component";
import {TemplateComponent} from "../../../templates/template.component";

@NgModule({
    imports: [
        CommonModule,
        FragmentsModule,
        RouterModule,
        PipesModule
    ],
    exports: [
        TplTextComponent,
        TplTextGalleryComponent,
        TplGalleryComponent,
        TplPostsComponent,
        TplPostContentGalleryComponent
    ],
    declarations: [
        TplTextComponent,
        TplTextGalleryComponent,
        TplGalleryComponent,
        TplPostsComponent,
        TplPostContentGalleryComponent,
        TemplateComponent
    ]
})
export class PageTemplatesModule {
}
