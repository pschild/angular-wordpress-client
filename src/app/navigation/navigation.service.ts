import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class NavigationService {

    constructor(private http: Http) {

    }

    loadNavigation() {
        // return this.http.get(`http://juliaunkrig.de/wp-json/wp-api-menus/v2/menus/2`)
        return this.http.get(`http://localhost:4200/assets/menu.json`)
            .map(res => res.json());
    }

}
