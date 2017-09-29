import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContentWithCodeblockComponent} from './content-with-codeblock.component';

describe('CodeblockComponent', () => {
    let component: ContentWithCodeblockComponent;
    let fixture: ComponentFixture<ContentWithCodeblockComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ContentWithCodeblockComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContentWithCodeblockComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
