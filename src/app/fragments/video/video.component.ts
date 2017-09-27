import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MediaService} from "../../media.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

    @Input() mediaId: number;
    @Input() mediaItem: any;
    @Input() showControls: boolean = true;
    @Input() enableAutoplay: boolean = false;

    @Output() onVideoLoaded: EventEmitter<any> = new EventEmitter();
    @Output() onVideoPlay: EventEmitter<any> = new EventEmitter();
    @Output() onVideoPause: EventEmitter<any> = new EventEmitter();

    loadedMediaItem$: BehaviorSubject<any> = new BehaviorSubject(null);
    dataHasLoaded$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    videoHasLoaded: boolean = false;

    constructor(private mediaService: MediaService) {
    }

    ngOnInit() {
        if (this.mediaId) {
            this.mediaService.loadByIds([this.mediaId]).subscribe(res => {
                this.loadedMediaItem$.next(res[0]);
                this.dataHasLoaded$.next(true);
            });
        } else if (this.mediaItem) {
            this.loadedMediaItem$.next(this.mediaItem);
            this.dataHasLoaded$.next(true);
        } else {
            throw new Error(`No mediaId and no mediaItem could be found.`);
        }
    }

    getSourceUrl() {
        return this.loadedMediaItem$.getValue().source_url;
    }

    getVideoType() {
        return this.loadedMediaItem$.getValue().mime_type;
    }

    onLoaded() {
        this.videoHasLoaded = true;
        this.onVideoLoaded.emit();
    }

    onPlay() {
        this.onVideoPlay.emit();
    }

    onPause() {
        this.onVideoPause.emit();
    }

}
