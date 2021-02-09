import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoekresultatenComponent } from './zoekresultaten.component';

describe('ZoekresultatenComponent', () => {
  let component: ZoekresultatenComponent;
  let fixture: ComponentFixture<ZoekresultatenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoekresultatenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoekresultatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
