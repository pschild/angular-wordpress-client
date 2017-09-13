import {Component, OnInit} from '@angular/core';
import {NavigationService} from "./navigation.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    navigationStructure$: Observable<any>;

    constructor(private navigationService: NavigationService) {
    }

    ngOnInit() {
        this.navigationStructure$ = this.navigationService.loadNavigation().map(res => res.items);
    }

    handleLinkClicked(clickedItem) {
        document.querySelector('body').classList.remove('menu-open');
    }

    handleMaskClicked() {
        document.querySelector('body').classList.remove('menu-open');
    }

}
