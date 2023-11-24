import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmQRPage } from './confirm-qr.page';
import { IonicModule, ModalController } from '@ionic/angular';

describe('ConfirmQRPage', () => {
  let component: ConfirmQRPage;
  let fixture: ComponentFixture<ConfirmQRPage>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()],  // Importa IonicModule y configúralo con forRoot    OJO QUE LOS DOS IMPORT DEBEN SER DE IONIC/ANGULAR
      providers: [ModalController]    // Proporciona ModalController como un proveedor
    });

    fixture = TestBed.createComponent(ConfirmQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
