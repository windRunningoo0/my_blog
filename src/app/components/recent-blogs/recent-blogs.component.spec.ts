import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBlogsComponent } from './recent-blogs.component';

describe('RecentBlogsComponent', () => {
  let component: RecentBlogsComponent;
  let fixture: ComponentFixture<RecentBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
