import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostPreviewComponent} from "./post-preview/post-preview.component";
import {TplPostsComponent} from "./tpl-posts/tpl-posts.component";
import {SharedModule} from "../shared/shared.module";
import {AppRoutingModule} from "../app-routing.module";
import {PipesModule} from "../shared/pipes/pipes.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AppRoutingModule,
        PipesModule
    ],
    declarations: [
        PostPreviewComponent,
        TplPostsComponent
    ],
    exports: [
        PostPreviewComponent,
        TplPostsComponent
    ]
})
export class PostsModule {
}
