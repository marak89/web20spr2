import { TestBed, inject } from '@angular/core/testing';

import { DnaWebSockService } from './dna-web-sock.service';

describe('DnaWebSockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DnaWebSockService]
    });
  });

  it('should be created', inject([DnaWebSockService], (service: DnaWebSockService) => {
    expect(service).toBeTruthy();
  }));
});
