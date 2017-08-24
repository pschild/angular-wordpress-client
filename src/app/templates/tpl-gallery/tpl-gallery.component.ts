import {Component, Input, OnInit} from '@angular/core';
import {MediaService} from "../../page/media.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-tpl-gallery',
    template: `
        <app-gallery [items]="mediaData$ | async" [activeItemId]="params.imageId"></app-gallery>
    `,
    styleUrls: ['./tpl-gallery.component.scss']
})
export class TplGalleryComponent implements OnInit {

    @Input() pageData: any;
    @Input() params: any;

    mediaData$: Observable<any>;

    constructor(private mediaService: MediaService) {
    }

    ngOnInit() {
        this.mediaData$ = this.mediaService.loadByIds(this.pageData.acf.gallery_images);
    }

}
