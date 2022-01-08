import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AactpMicroSharesComponent } from './aactp-micro-shares.component';

describe('AactpMicroSharesComponent', () => {
  let component: AactpMicroSharesComponent;
  let fixture: ComponentFixture<AactpMicroSharesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AactpMicroSharesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AactpMicroSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
