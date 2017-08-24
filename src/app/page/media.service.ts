import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class MediaService {

    constructor(private http: Http) {
    }

    loadByIds(ids: Array<number>) {
        return this.http.get(`http://juliaunkrig.de/wp-json/wp/v2/media/?per_page=5&include=${ids.join(',')}`)
            .map(res => res.json());
    }

}
