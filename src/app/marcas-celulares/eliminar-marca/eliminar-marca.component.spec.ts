import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMarcaComponent } from './eliminar-marca.component';

describe('EliminarMarcaComponent', () => {
  let component: EliminarMarcaComponent;
  let fixture: ComponentFixture<EliminarMarcaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarMarcaComponent]
    });
    fixture = TestBed.createComponent(EliminarMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
