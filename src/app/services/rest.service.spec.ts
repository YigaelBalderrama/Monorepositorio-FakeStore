import { TestBed } from '@angular/core/testing';

import { RestService } from './rest.service';

describe('RestserviceService', () => {
  let service: RestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
