import { TestBed } from '@angular/core/testing';
import { NewsapiService } from './newsapi.service';

describe('NewsapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsapiService = TestBed.get(NewapiService);
    expect(service).toBeTruthy();
  });
});
