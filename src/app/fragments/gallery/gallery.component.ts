import {Component, EventEmitter, Input, OnInit, Output, Renderer2} from '@angular/core';
import {Location} from '@angular/common';
import {Ng2DeviceService} from "ng2-device-detector";
import {KeyCode} from "../../enums/key-code.enum";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'app-gallery',
    host: {'(window:keyup)': 'handleKeyDown($event)'},
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    @Input() items: Array<any> = [];
    @Output() onLoadNextPage: EventEmitter<any> = new EventEmitter();
    private _activeItemId: number;

    useLegacyGrid: boolean = false;

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

    handleKeyDown(event: KeyboardEvent) {
        switch (event.keyCode) {
            case KeyCode.LEFT_ARROW:
                let prevItem = this.getPreviousItemByItemId(this.activeItemId);
                this.setActiveItemId(prevItem.id);
                break;
            case KeyCode.RIGHT_ARROW:
                let nextItem = this.getNextItemByItemId(this.activeItemId);
                this.setActiveItemId(nextItem.id);
                break;
            case KeyCode.ESCAPE:
                this.setActiveItemId(-1);
                break;
        }
    }

    getNextItemByItemId(itemId: number) {
        let index = this.items.map(item => item.id).indexOf(itemId);
        if (index >= 0) {
            return this.getNextItemByIndex(index);
        }
    }

    getPreviousItemByItemId(itemId: number) {
        let index = this.items.map(item => item.id).indexOf(itemId);
        if (index >= 0) {
            return this.getPreviousItemByIndex(index);
        }
    }

    getNextItemByIndex(index: number) {
        let nextIndex;
        if (index >= this.items.length - 1) {
            nextIndex = 0;
        } else {
            nextIndex = index + 1;
        }

        return this.items[nextIndex];
    }

    getPreviousItemByIndex(index: number) {
        let prevIndex;
        if (index === 0) {
            prevIndex = this.items.length - 1;
        } else {
            prevIndex = index - 1;
        }

        return this.items[prevIndex];
    }

    loadNextPage() {
        this.onLoadNextPage.emit();
    }

    setActiveItemId(itemId) {
        this.activeItemId = itemId;
        this.handleSelectionChange();
    }

    checkBodyScrollBehaviour() {
        if (isNaN(this.activeItemId) || this.activeItemId < 0) {
            this.renderer.removeClass(document.body, 'modal-open')
        } else {
            this.renderer.addClass(document.body, 'modal-open');
        }
    }

    shareOnFacebook(item) {
        let params = {
            title: item.title.rendered,
            description: item.caption.rendered,
            imageUrl: item.source_url,
            redirectUrl: location.href
        };
        let url = `https://www.facebook.com/sharer/sharer.php?u=${environment.staticSharerUrl}?params=${JSON.stringify(params)}`;
        window.open(url, 'pop', 'width=600, height=400, scrollbars=no');
    }

}
