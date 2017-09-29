import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentWithCodeblockComponent} from "./content-with-codeblock/content-with-codeblock.component";
import {TplPostCodeblocksComponent} from "./tpl-post-codeblocks/tpl-post-codeblocks.component";
import {PipesModule} from "../shared/pipes/pipes.module";

@NgModule({
    imports: [
        CommonModule,
        PipesModule
    ],
    declarations: [
        ContentWithCodeblockComponent,
        TplPostCodeblocksComponent
    ],
    exports: [
        ContentWithCodeblockComponent,
        TplPostCodeblocksComponent
    ]
})
export class CodeblockModule {
}
