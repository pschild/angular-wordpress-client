import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MediaComponent} from "./media/media.component";
import {ImageComponent} from "./image/image.component";
import {VideoComponent} from "./video/video.component";
import {LoadingIndicatorComponent} from "./loading-indicator/loading-indicator.component";
import {MediaService} from "./media/media.service";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        MediaComponent,
        ImageComponent,
        VideoComponent,
        LoadingIndicatorComponent
    ],
    exports: [
        ImageComponent,
        VideoComponent,
        LoadingIndicatorComponent
    ],
    providers: [
        MediaService
    ]
})
export class SharedModule {
}
