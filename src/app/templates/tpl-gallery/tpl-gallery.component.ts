import {Component, Input, OnInit} from '@angular/core';
import {MediaService} from "../../page/media.service";

@Component({
    selector: 'app-tpl-gallery',
    template: `
        <app-gallery [items]="items" [activeItemId]="params.imageId" (onLoadNextPage)="loadPage($event)"></app-gallery>
    `,
    styleUrls: ['./tpl-gallery.component.scss']
})
export class TplGalleryComponent implements OnInit {

    @Input() pageData: any;
    @Input() params: any;

    items: Array<any> = [];

    constructor(private mediaService: MediaService) {
    }

    ngOnInit() {
        if (this.pageData.acf.gallery_images) {
            this.loadPage(1);
        }
    }

    loadPage(page) {
        if (this.items.length < this.pageData.acf.gallery_images.length) {
            this.mediaService.loadByIds(this.pageData.acf.gallery_images, page).subscribe(res => {
                this.items = this.items.concat(res);
                this.checkDeeplink(page);
            });
        }
    }

    checkDeeplink(page) {
        if (this.params.imageId && this.items.map(item => item.id).indexOf(+this.params.imageId) < 0) {
            this.loadPage(page + 1);
        }
    }

}
