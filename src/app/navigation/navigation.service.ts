import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {environment} from "../../environments/environment";

@Injectable()
export class NavigationService {

    constructor(private http: Http) {

    }

    loadNavigation() {
        return this.http.get(`${environment.apiUrl}/wp-api-menus/v2/menus/${environment.menuId}`)
            .map(res => res.json());
    }

}
