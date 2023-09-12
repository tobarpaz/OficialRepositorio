import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleAsigPage } from './detalle-asig.page';

describe('DetalleAsigPage', () => {
  let component: DetalleAsigPage;
  let fixture: ComponentFixture<DetalleAsigPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleAsigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
