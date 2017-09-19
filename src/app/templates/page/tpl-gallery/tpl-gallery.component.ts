import {Component, Input, OnInit} from '@angular/core';
import {MediaService} from "../../../media.service";

@Component({
    selector: 'app-tpl-gallery',
    template: `
        <app-loading-indicator [size]="100" *ngIf="!hasLoaded"></app-loading-indicator>
        <app-gallery [items]="items" [activeItemId]="params.imageId" (onLoadNextPage)="loadNextPage()" [ngStyle]="{'display': hasLoaded ? 'block' : 'none'}"></app-gallery>
    `,
    styleUrls: ['./tpl-gallery.component.scss']
})
export class TplGalleryComponent implements OnInit {

    @Input() pageData: any;
    @Input() params: any;

    items: Array<any> = [];
    page: number = 1;
    hasLoaded: boolean = false;

    constructor(private mediaService: MediaService) {
    }

    ngOnInit() {
        if (this.pageData.acf.gallery_images) {
            this.loadPage(1);
        }
    }

    loadNextPage() {
        this.page++;
        this.loadPage(this.page);
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
            this.loadNextPage();
        } else {
            this.hasLoaded = true;
        }
    }

}
