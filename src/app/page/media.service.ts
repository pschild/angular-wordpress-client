import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class MediaService {

    private itemsPerPage = 20;

    constructor(private http: Http) {
    }

    loadByIds(ids: Array<number>, page: number = 1) {
        return this.http.get(`http://juliaunkrig.de/wp-json/wp/v2/media/?page=${page}&per_page=${this.itemsPerPage}&include=${ids.join(',')}`)
            .map(res => res.json());
    }

}
