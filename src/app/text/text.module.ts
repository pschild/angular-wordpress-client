import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TplTextComponent} from "./tpl-text/tpl-text.component";
import {PipesModule} from "../shared/pipes/pipes.module";

@NgModule({
    imports: [
        CommonModule,
        PipesModule
    ],
    declarations: [
        TplTextComponent
    ],
    exports: [
        TplTextComponent
    ]
})
export class TextModule {
}
