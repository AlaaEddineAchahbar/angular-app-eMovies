import { TestBed } from '@angular/core/testing';

import { EMoviesService } from './e-movies.service';

describe('EMoviesServiceService', () => {
  let service: EMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
