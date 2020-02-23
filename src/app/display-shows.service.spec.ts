import { TestBed } from '@angular/core/testing';

import { DisplayShowsService } from './display-shows.service';

describe('DisplayShowsService', () => {
  let service: DisplayShowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayShowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
