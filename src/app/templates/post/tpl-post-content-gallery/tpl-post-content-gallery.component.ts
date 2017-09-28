import {Component, OnInit} from '@angular/core';
import {MediaService} from "../../../media.service";
import {TemplateComponent} from "../../template.component";

@Component({
    selector: 'app-tpl-post-content-gallery',
    template: `
        <h2>{{data.title.rendered}}</h2>
        <app-media-slider [items]="items"></app-media-slider>
        <p [innerHtml]="data.acf.content | safeHtml"></p>
    `,
    styleUrls: ['./tpl-post-content-gallery.component.scss']
})
export class TplPostContentGalleryComponent extends TemplateComponent implements OnInit {

    items: Array<any> = [];

    constructor(private mediaService: MediaService) {
        super();
    }

    ngOnInit() {
        if (this.data.acf.gallery_images) {
            this.mediaService.loadByIds(this.data.acf.gallery_images).subscribe(res => {
                this.items = res;
            });
        }
    }

}
