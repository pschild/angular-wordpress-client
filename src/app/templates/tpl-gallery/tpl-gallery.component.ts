import {Component, OnInit} from '@angular/core';
import {MediaService} from "../../shared/media/media.service";
import {TemplateComponent} from "../../core/template/template.component";

@Component({
    selector: 'app-tpl-gallery',
    template: `
        <app-loading-indicator [size]="100" *ngIf="!hasLoaded"></app-loading-indicator>
        <app-gallery [imageItems]="imageItems" [activeItemId]="params.imageId" (onLoadNextPage)="loadNextPage()"
                     [ngStyle]="{'display': hasLoaded ? 'block' : 'none'}"></app-gallery>
    `,
    styleUrls: ['./tpl-gallery.component.scss']
})
export class TplGalleryComponent extends TemplateComponent implements OnInit {

    imageItems: Array<any> = [];
    page: number = 1;
    hasLoaded: boolean = false;

    constructor(private mediaService: MediaService) {
        super();
    }

    ngOnInit() {
        if (this.data.acf.gallery_images) {
            this.loadPage(1);
        }
    }

    loadNextPage() {
        this.page++;
        this.loadPage(this.page);
    }

    loadPage(page) {
        if (this.imageItems.length < this.data.acf.gallery_images.length) {
            this.mediaService.loadByIds(this.data.acf.gallery_images, page).subscribe(res => {
                this.imageItems = this.imageItems.concat(res);
                this.checkDeeplink();
            });
        }
    }

    checkDeeplink() {
        if (this.params.imageId && this.imageItems.map(item => item.id).indexOf(+this.params.imageId) < 0) {
            this.loadNextPage();
        } else {
            this.hasLoaded = true;
        }
    }

}
