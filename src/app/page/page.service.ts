import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class PageService {

    constructor(private http: Http) {
    }

    loadBySlug(slug) {
        return this.http.get(`http://juliaunkrig.de/wp-json/wp/v2/pages/?slug=${slug}`)
            .map(res => res.json())
            .map(res => res[0]);
    }

}
