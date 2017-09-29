import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class PageService {

    constructor(private http: Http) {
    }

    loadBySlug(slug) {
        return this.http.get(`${environment.apiUrl}/wp/v2/pages/?slug=${slug}`)
            .map(res => res.json())
            .map(res => res[0]);
    }

}
