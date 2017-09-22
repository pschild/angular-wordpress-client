import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MediaService} from "../../media.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

    @Input() imageId: number;
    @Input() imageItem: any;
    @Input() useAsBackground: boolean = false;
    @Input() backgroundProps: {'background-position-x': any, 'background-position-y': any} = null;
    @Input() height: string = '200px';
    @Input() useFullVersion: boolean = false;
    @Input() center: boolean = false;

    @Output() onImageLoaded: EventEmitter<any> = new EventEmitter();
    @Output() onImageSwipeLeft: EventEmitter<any> = new EventEmitter();
    @Output() onImageSwipeRight: EventEmitter<any> = new EventEmitter();

    loadedImageItem$: BehaviorSubject<any> = new BehaviorSubject(null);
    dataHasLoaded$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    imageHasLoaded: boolean = false;

    constructor(private mediaService: MediaService) {
    }

    ngOnInit() {
        if (this.imageId) {
            this.mediaService.loadByIds([this.imageId]).subscribe(res => {
                this.loadedImageItem$.next(res[0]);
                this._setBackgroundProps();
                this.dataHasLoaded$.next(true);
            });
        } else if (this.imageItem) {
            this.loadedImageItem$.next(this.imageItem);
            this.dataHasLoaded$.next(true);
        } else {
            throw new Error(`No imageId and no imageItem could be found.`);
        }
    }

    private _setBackgroundProps() {
        if (this.loadedImageItem$.getValue() && this.loadedImageItem$.getValue().acf) {
            this.backgroundProps = {
                'background-position-x': this.loadedImageItem$.getValue().acf['background-x'] + '%',
                'background-position-y': this.loadedImageItem$.getValue().acf['background-y'] + '%'
            };
        }
    }

    getBackgroundStyle() {
        return Object.assign({'background-image': `url(${this.getSourceUrl()})`}, this.backgroundProps, {'height': this.height});
    }

    getSourceUrl() {
        let mediaDetails = this.loadedImageItem$.getValue().media_details;
        if (!mediaDetails) {
            return;
        }

        if (this.useFullVersion) {
            return mediaDetails.sizes.full.source_url;
        }

        if (mediaDetails.height > mediaDetails.width) {
            return mediaDetails.sizes.image_grid_portrait.source_url;
        } else {
            return mediaDetails.sizes.image_grid_landscape.source_url;
        }
    }

    onLoaded() {
        this.imageHasLoaded = true;
        this.onImageLoaded.emit();
    }

    onSwipeLeft() {
        this.onImageSwipeLeft.emit();
    }

    onSwipeRight() {
        this.onImageSwipeRight.emit();
    }

}
