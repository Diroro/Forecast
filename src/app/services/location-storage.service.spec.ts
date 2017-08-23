import { TestBed, inject } from '@angular/core/testing';

import { LocationStorageService } from './location-storage.service';

describe('LocationStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationStorageService]
    });
  });

  it('should ...', inject([LocationStorageService], (service: LocationStorageService) => {
    expect(service).toBeTruthy();
  }));
});
