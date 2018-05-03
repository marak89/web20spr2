import { TestBed, inject } from '@angular/core/testing';

import { DzialyService } from './dzialy.service';

describe('DzialyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DzialyService]
    });
  });

  it('should be created', inject([DzialyService], (service: DzialyService) => {
    expect(service).toBeTruthy();
  }));
});
