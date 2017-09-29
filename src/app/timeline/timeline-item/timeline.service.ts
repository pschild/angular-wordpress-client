import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class TimelineService {

    constructor(private http: Http) {
    }

    loadAll() {
        return this.http.get(`${environment.apiUrl}/wp/v2/timeline`)
            .map(res => res.json());
    }

}