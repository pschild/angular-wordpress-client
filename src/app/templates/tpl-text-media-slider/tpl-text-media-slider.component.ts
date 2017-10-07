import {Component, OnInit} from '@angular/core';
import {MediaService} from "../../shared/media/media.service";
import {TemplateComponent} from "../../core/template/template.component";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-tpl-text-media-slider',
    template: `
        <h2>{{data.title.rendered}}</h2>
        <app-media-slider [mediaItems]="mediaItems$ | async"></app-media-slider>
        <app-text [data]="data"></app-text>
    `,
    styleUrls: ['./tpl-text-media-slider.component.scss']
})
export class TplTextMediaSliderComponent extends TemplateComponent implements OnInit {

    mediaItems$: Observable<any[]>;

    constructor(private mediaService: MediaService) {
        super();
    }

    ngOnInit() {
        if (this.data.acf.gallery_images) {
            this.mediaItems$ = this.mediaService.loadByIds(this.data.acf.gallery_images);
        }
    }

}
