import {Component, Input, OnInit} from '@angular/core';
import {MediaService} from "../../../media.service";

@Component({
    selector: 'app-tpl-post-content-gallery',
    template: `
        <h2>{{postData.title.rendered}}</h2>
        <app-media-slider [items]="items"></app-media-slider>
        <p [innerHtml]="postData.acf.content | safeHtml"></p>
    `,
    styleUrls: ['./tpl-post-content-gallery.component.scss']
})
export class TplPostContentGalleryComponent implements OnInit {

    @Input() postData: any;
    @Input() params: any;

    items: Array<any> = [];

    constructor(private mediaService: MediaService) {
    }

    ngOnInit() {
        if (this.postData.acf.gallery_images) {
            this.mediaService.loadByIds(this.postData.acf.gallery_images).subscribe(res => {
                this.items = res;
            });
        }
    }

}
