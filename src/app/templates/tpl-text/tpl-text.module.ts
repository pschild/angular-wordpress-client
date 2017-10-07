import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TplTextComponent} from "./tpl-text.component";
import {TextModule} from "../../fragments/text/text.module";

@NgModule({
    imports: [
        CommonModule,
        TextModule
    ],
    declarations: [
        TplTextComponent
    ],
    exports: [
        TplTextComponent
    ]
})
export class TplTextModule {
}
