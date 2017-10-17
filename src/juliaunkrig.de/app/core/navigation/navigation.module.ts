import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationTreeComponent} from "./navigation-tree/navigation-tree.component";
import {NavigationComponent} from "./navigation.component";
import {AppRoutingModule} from "../../app-routing.module";
import {NavigationService} from "ng-wordpress-services";

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    declarations: [
        NavigationComponent,
        NavigationTreeComponent
    ],
    exports: [
        NavigationComponent,
        NavigationTreeComponent
    ],
    providers: [
        NavigationService
    ]
})
export class NavigationModule {
}
