import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPreviewComponent } from './gallery-preview.component';

describe('GalleryComponent', () => {
  let component: GalleryPreviewComponent;
  let fixture: ComponentFixture<GalleryPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
