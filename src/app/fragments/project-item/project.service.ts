import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class ProjectService {

    constructor(private http: Http) {
    }

    loadByIds(ids: Array<number>) {
        return this.http.get(`${environment.apiUrl}/wp/v2/project/?include=${ids.join(',')}`)
            .map(res => res.json());
    }

}
