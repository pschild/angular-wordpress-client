import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineItemComponent} from "./timeline-item/timeline-item.component";
import {TplTimelineComponent} from "./tpl-timeline/tpl-timeline.component";
import {TimelineService} from "./timeline-item/timeline.service";
import {PipesModule} from "../shared/pipes/pipes.module";

@NgModule({
    imports: [
        CommonModule,
        PipesModule
    ],
    declarations: [
        TimelineItemComponent,
        TplTimelineComponent
    ],
    exports: [
        TimelineItemComponent,
        TplTimelineComponent
    ],
    providers: [
        TimelineService
    ]
})
export class TimelineModule {
}
