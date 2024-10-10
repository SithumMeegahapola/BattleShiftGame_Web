import { TestBed } from '@angular/core/testing';

import { ApiGameServiceService } from './api-game-service.service';

describe('ApiGameServiceService', () => {
  let service: ApiGameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGameServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
