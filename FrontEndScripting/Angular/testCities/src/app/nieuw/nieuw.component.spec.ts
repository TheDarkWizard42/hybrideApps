import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NieuwComponent } from './nieuw.component';

describe('NieuwComponent', () => {
  let component: NieuwComponent;
  let fixture: ComponentFixture<NieuwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NieuwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NieuwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
