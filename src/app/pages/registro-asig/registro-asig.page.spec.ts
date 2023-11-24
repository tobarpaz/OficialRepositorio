import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroAsigPage } from './registro-asig.page';

describe('RegistroAsigPage', () => {
  let component: RegistroAsigPage;
  let fixture: ComponentFixture<RegistroAsigPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAsigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
