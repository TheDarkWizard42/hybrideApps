import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlantregistratieComponent } from './klantregistratie.component';

describe('KlantregistratieComponent', () => {
  let component: KlantregistratieComponent;
  let fixture: ComponentFixture<KlantregistratieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlantregistratieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlantregistratieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
