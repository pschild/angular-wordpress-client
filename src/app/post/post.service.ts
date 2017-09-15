import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class PostService {

    constructor(private http: Http) {
    }

    loadById(postId: number) {
        return this.http.get(`http://juliaunkrig.de/wp-json/wp/v2/posts/${postId}`)
            .map(res => res.json());
    }

    loadByCategoryIds(categoryIds: Array<number>) {
        return this.http.get(`http://juliaunkrig.de/wp-json/wp/v2/posts/?categories=${categoryIds.join(',')}`)
            .map(res => res.json());
    }
}
