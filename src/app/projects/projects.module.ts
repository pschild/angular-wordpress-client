import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectItemComponent} from "./project-item/project-item.component";
import {TplProjectsComponent} from "./tpl-projects/tpl-projects.component";
import {ProjectService} from "./project-item/project.service";
import {PipesModule} from "../shared/pipes/pipes.module";
import {MediaSliderModule} from "../media-slider/media-slider.module";

@NgModule({
    imports: [
        CommonModule,
        PipesModule,
        MediaSliderModule
    ],
    declarations: [
        ProjectItemComponent,
        TplProjectsComponent
    ],
    exports: [
        ProjectItemComponent,
        TplProjectsComponent
    ],
    providers: [
        ProjectService
    ]
})
export class ProjectsModule {
}
