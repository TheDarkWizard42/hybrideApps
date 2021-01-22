import { TestBed } from '@angular/core/testing';

import { MealapiService } from './mealapi.service';

describe('MealapiService', () => {
  let service: MealapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
