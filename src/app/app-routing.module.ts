import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {APP_BASE_HREF} from "@angular/common";
import {PageComponent} from "./page/page.component";
import {PostComponent} from "./post/post.component";

const routes: Routes = [
    { path: '', redirectTo: '/ueber-mich', pathMatch: 'full' },
    { path: ':shortTitle', component: PageComponent },
    { path: ':shortTitle/gallery/:imageId', component: PageComponent },
    { path: ':shortTitle/post/:postId', component: PostComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppRoutingModule {
}
