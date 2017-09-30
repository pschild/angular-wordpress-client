import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TplTextComponent} from "./tpl-text/tpl-text.component";
import {PipesModule} from "../shared/pipes/pipes.module";
import {TextComponent} from "./text/text.component";

@NgModule({
    imports: [
        CommonModule,
        PipesModule
    ],
    declarations: [
        TplTextComponent,
        TextComponent
    ],
    exports: [
        TplTextComponent,
        TextComponent
    ]
})
export class TextModule {
}
