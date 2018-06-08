import { TestBed, inject } from '@angular/core/testing';

import { ChartPostService } from './chart-post.service';

describe('ChartPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartPostService]
    });
  });

  it('should be created', inject([ChartPostService], (service: ChartPostService) => {
    expect(service).toBeTruthy();
  }));
});
