import { TestBed } from '@angular/core/testing';

import { SiberiaUiService } from './siberia-ui.service';

describe('SiberiaUiService', () => {
  let service: SiberiaUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiberiaUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
