import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TplGalleryComponent} from "./page/tpl-gallery/tpl-gallery.component";
import {TplTextGalleryComponent} from "./page/tpl-text-gallery/tpl-text-gallery.component";
import {TplTextComponent} from "./page/tpl-text/tpl-text.component";
import {FragmentsModule} from "../fragments/fragments.module";
import {TplPostsComponent} from "./page/tpl-posts/tpl-posts.component";
import {TplPostContentGalleryComponent} from "./post/tpl-post-content-gallery/tpl-post-content-gallery.component";
import {RouterModule} from "@angular/router";
import {PipesModule} from "../pipes/pipes.module";
import {TplPostCodeblocksComponent} from "./post/tpl-post-codeblocks/tpl-post-codeblocks.component";

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
        TplPostContentGalleryComponent,
        TplPostCodeblocksComponent
    ],
    declarations: [
        TplTextComponent,
        TplTextGalleryComponent,
        TplGalleryComponent,
        TplPostsComponent,
        TplPostContentGalleryComponent,
        TplPostCodeblocksComponent
    ]
})
export class PageTemplatesModule {
}
