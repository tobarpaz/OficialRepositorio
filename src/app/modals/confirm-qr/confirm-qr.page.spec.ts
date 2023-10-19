import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmQRPage } from './confirm-qr.page';

describe('ConfirmQRPage', () => {
  let component: ConfirmQRPage;
  let fixture: ComponentFixture<ConfirmQRPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
