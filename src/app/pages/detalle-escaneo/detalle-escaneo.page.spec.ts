import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleEscaneoPage } from './detalle-escaneo.page';

describe('DetalleEscaneoPage', () => {
  let component: DetalleEscaneoPage;
  let fixture: ComponentFixture<DetalleEscaneoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleEscaneoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
