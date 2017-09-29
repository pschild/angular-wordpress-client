import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/expand";
import "rxjs/add/operator/takeWhile";
import {environment} from "../../../environments/environment";

@Injectable()
export class MediaService {

    static MIME_TYPE = {
        IMAGE_JPEG: 'image/jpeg',
        VIDEO_MP4: 'video/mp4'
    };

    private itemsPerPage = 30;

    constructor(private http: Http) {
    }

    loadByIds(ids: Array<number>, page: number = 1) {
        return this.http.get(`${environment.apiUrl}/wp/v2/media/?page=${page}&per_page=${this.itemsPerPage}&include=${ids.join(',')}&orderby=include&order=asc`)
            .map(res => res.json());
    }

    loadAllByIds(ids: Array<number>) {
        let count = 0;
        let allItems = [];
        return this.loadByIds(ids)
            .expand((items, index) => {
                return this.loadByIds(ids, index + 2);
            })
            .takeWhile((items, index) => {
                count += items.length;
                return count < ids.length;
            });
    }

}
