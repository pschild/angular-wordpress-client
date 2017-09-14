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

    menuIsOpen: boolean = false;

    constructor(private navigationService: NavigationService) {
    }

    ngOnInit() {
        this.navigationStructure$ = this.navigationService.loadNavigation().map(res => res.items);
    }

    handleMenuTriggerClicked() {
        this.menuIsOpen = !this.menuIsOpen;
    }

    handleLinkClicked(clickedItem) {
        this.menuIsOpen = false;
    }

    handleMaskClicked() {
        this.menuIsOpen = false;
    }

}
