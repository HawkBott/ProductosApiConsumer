import { TestBed } from '@angular/core/testing';

import { ServiciosProveedoresService } from './servicios-proveedores.service';

describe('ServiciosProveedoresService', () => {
  let service: ServiciosProveedoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosProveedoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
