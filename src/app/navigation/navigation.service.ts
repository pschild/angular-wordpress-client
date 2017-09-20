import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {environment} from "../../environments/environment";

@Injectable()
export class NavigationService {

    constructor(private http: Http) {

    }

    loadNavigation() {
        return this.http.get(`${environment.apiUrl}/pschild-angular/v1/menu/${environment.menuName}`)
            .map(res => res.json());
    }

}
