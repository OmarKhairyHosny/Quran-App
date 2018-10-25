/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuranAppServiceService } from './QuranApp-Service.service';

describe('Service: QuranAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuranAppServiceService]
    });
  });

  it('should ...', inject([QuranAppServiceService], (service: QuranAppServiceService) => {
    expect(service).toBeTruthy();
  }));
});
