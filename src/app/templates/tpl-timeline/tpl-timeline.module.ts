import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TplTimelineComponent} from "./tpl-timeline.component";
import {TimelineItemModule} from "../../fragments/timeline-item/timeline-item.module";
import {TimelineService} from "../../fragments/timeline-item/timeline.service";

@NgModule({
    imports: [
        CommonModule,
        TimelineItemModule
    ],
    declarations: [
        TplTimelineComponent
    ],
    exports: [
        TplTimelineComponent
    ],
    providers: [
        TimelineService
    ]
})
export class TplTimelineModule {
}
