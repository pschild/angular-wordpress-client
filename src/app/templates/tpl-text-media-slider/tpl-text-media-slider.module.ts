import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TplTextMediaSliderComponent} from "./tpl-text-media-slider.component";
import {MediaSliderModule} from "../../fragments/media-slider/media-slider.module";
import {TextModule} from "../../fragments/text/text.module";

@NgModule({
    imports: [
        CommonModule,
        TextModule,
        MediaSliderModule
    ],
    declarations: [
        TplTextMediaSliderComponent
    ],
    exports: [
        TplTextMediaSliderComponent
    ]
})
export class TplTextMediaSliderModule {
}
