import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PipesModule} from "../../shared/pipes/pipes.module";
import {TplPostsComponent} from "./tpl-posts.component";
import {PostPreviewModule} from "../../fragments/post-preview/post-preview.module";

@NgModule({
    imports: [
        CommonModule,
        PostPreviewModule
    ],
    declarations: [
        TplPostsComponent
    ],
    exports: [
        TplPostsComponent
    ]
})
export class TplPostsModule {
}
