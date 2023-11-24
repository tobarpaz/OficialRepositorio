import { TestBed } from '@angular/core/testing';

import { LocationService } from './location.service';
import { AngularDelegate } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LocationService', () => {
  let service: LocationService;
  let http:HttpClientTestingModule

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationService, AngularDelegate],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(LocationService);
    http = TestBed.inject(HttpClientTestingModule);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });  
});
