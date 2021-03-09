import { TestBed } from '@angular/core/testing';

import { FormUserDataService } from './form-user-data.service';

describe('FormUserDataService', () => {
  let service: FormUserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormUserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
