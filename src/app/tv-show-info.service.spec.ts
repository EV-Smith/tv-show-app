import { TestBed } from '@angular/core/testing';

import { TvShowInfoService } from './tv-show-info.service';

describe('TvShowInfoService', () => {
  let service: TvShowInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvShowInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
