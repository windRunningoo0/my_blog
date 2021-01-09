import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentGalleriesComponent } from './recent-galleries.component';

describe('RecentGalleriesComponent', () => {
  let component: RecentGalleriesComponent;
  let fixture: ComponentFixture<RecentGalleriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentGalleriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentGalleriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
