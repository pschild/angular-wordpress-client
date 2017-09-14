import {Component, EventEmitter, Input, OnInit, Output, Renderer2} from '@angular/core';
import {Location} from '@angular/common';
import {Ng2DeviceService} from "ng2-device-detector";

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    @Input() items: Array<any> = [];
    @Output() onLoadNextPage: EventEmitter<any> = new EventEmitter();
    private _activeItemId: number;

    useLegacyGrid: boolean = false;

    private page = 1;

    constructor(private renderer: Renderer2, private location: Location, private deviceService: Ng2DeviceService) {
    }

    ngOnInit() {
        this.useLegacyGrid = this.deviceService.getDeviceInfo().browser === 'ms-edge' || this.deviceService.getDeviceInfo().browser === 'ie';
        this.checkBodyScrollBehaviour();
    }

    @Input()
    set activeItemId(value) {
        this._activeItemId = +value;
    }

    get activeItemId() {
        return this._activeItemId;
    }

    handleSelectionChange() {
        // pulls "/anyBasePage" out of "/anyBasePage/gallery/<imageId>"
        let basePath;
        if (this.location.path().indexOf('gallery') >= 0) {
            basePath = this.location.path().substr(0, this.location.path().indexOf('gallery') - 1);
        } else {
            basePath = this.location.path();
        }

        if (this.activeItemId < 0) {
            this.location.go(basePath);
        } else {
            this.location.go(`${basePath}/gallery/${this.activeItemId}`);
        }

        this.checkBodyScrollBehaviour();
    }

    getNextItem(index: number) {
        let nextIndex;
        if (index >= this.items.length - 1) {
            nextIndex = 0;
        } else {
            nextIndex = index + 1;
        }

        return this.items[nextIndex];
    }

    getPreviousItem(index: number) {
        let prevIndex;
        if (index === 0) {
            prevIndex = this.items.length - 1;
        } else {
            prevIndex = index - 1;
        }

        return this.items[prevIndex];
    }

    loadNextPage() {
        this.page++;
        this.onLoadNextPage.emit(this.page);
    }

    setActiveItemId(itemId) {
        this.activeItemId = itemId;
        this.handleSelectionChange();
    }

    onImageLoaded(itemId) {
        // document.querySelector('label[for=image-'+itemId+'] .loading-indicator').remove();
    }

    checkBodyScrollBehaviour() {
        if (isNaN(this.activeItemId) || this.activeItemId < 0) {
            this.renderer.removeClass(document.body, 'modal-open')
        } else {
            this.renderer.addClass(document.body, 'modal-open');
        }
    }

}
