import {Component, OnInit} from '@angular/core';
import {MediaService} from "../../shared/media/media.service";
import {TemplateComponent} from "../../core/template/template.component";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-tpl-post-content-gallery',
    template: `
        <h2>{{data.title.rendered}}</h2>
        <app-media-slider [mediaItems]="mediaItems$ | async"></app-media-slider>
        <p [innerHtml]="data.acf.content | safeHtml"></p>
    `,
    styleUrls: ['./tpl-post-content-gallery.component.scss']
})
export class TplPostContentGalleryComponent extends TemplateComponent implements OnInit {

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
