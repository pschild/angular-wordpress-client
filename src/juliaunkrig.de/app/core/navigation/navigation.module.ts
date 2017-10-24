import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationTreeComponent} from "./navigation-tree/navigation-tree.component";
import {NavigationComponent} from "./navigation.component";
import {AppRoutingModule} from "../../app-routing.module";

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
    ]
})
export class NavigationModule {
}
