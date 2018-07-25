import { TestBed, async, inject } from '@angular/core/testing';

import { PortfolioCheckGuard } from './portfolio-check.guard';

describe('PortfolioCheckGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfolioCheckGuard]
    });
  });

  it('should ...', inject([PortfolioCheckGuard], (guard: PortfolioCheckGuard) => {
    expect(guard).toBeTruthy();
  }));
});
