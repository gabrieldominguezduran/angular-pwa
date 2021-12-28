import { TestBed } from '@angular/core/testing';

import { ComponentDetailService } from './component-detail.service';

describe('ComponentDetailService', () => {
  let service: ComponentDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
