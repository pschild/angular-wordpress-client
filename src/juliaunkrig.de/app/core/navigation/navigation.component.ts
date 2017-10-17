import {Component, OnInit} from '@angular/core';
import {NavigationService} from "./navigation.service";
import {Observable} from "rxjs/Observable";
import {KeyCode} from "../../enums/key-code.enum";

@Component({
    selector: 'app-navigation',
    host: {'(window:keyup)': 'handleKeyDown($event)'},
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

    handleKeyDown(event: KeyboardEvent) {
        switch (event.keyCode) {
            case KeyCode.ESCAPE:
                this.menuIsOpen = false;
                break;
        }
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
