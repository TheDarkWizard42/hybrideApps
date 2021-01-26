import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlantdetailsComponent } from './klantdetails.component';

describe('KlantdetailsComponent', () => {
  let component: KlantdetailsComponent;
  let fixture: ComponentFixture<KlantdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlantdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlantdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
