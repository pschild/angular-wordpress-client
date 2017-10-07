import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PipesModule} from "../../shared/pipes/pipes.module";
import {PostPreviewComponent} from "./post-preview.component";
import {SharedModule} from "../../shared/shared.module";
import {AppRoutingModule} from "../../app-routing.module";

@NgModule({
    imports: [
        CommonModule,
        PipesModule,
        AppRoutingModule,
        SharedModule
    ],
    declarations: [
        PostPreviewComponent
    ],
    exports: [
        PostPreviewComponent
    ]
})
export class PostPreviewModule {
}