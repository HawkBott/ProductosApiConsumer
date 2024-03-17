import { TestBed } from '@angular/core/testing';

import { ServiciosProductoService } from './servicios-producto.service';



describe('ServiciosProductoService', () => {
  let service: ServiciosProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
