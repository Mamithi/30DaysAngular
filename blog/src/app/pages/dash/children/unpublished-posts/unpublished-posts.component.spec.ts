import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpublishedPostsComponent } from './unpublished-posts.component';

describe('UnpublishedPostsComponent', () => {
  let component: UnpublishedPostsComponent;
  let fixture: ComponentFixture<UnpublishedPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnpublishedPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpublishedPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
