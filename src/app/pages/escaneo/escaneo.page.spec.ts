import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscaneoPage } from './escaneo.page';
import { AngularDelegate, IonicModule, ModalController } from '@ionic/angular';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

describe('EscaneoPage', () => {
  let component: EscaneoPage;
  let fixture: ComponentFixture<EscaneoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebaseConfig), 
      AngularFireAuthModule,],
      providers:[ModalController, AngularDelegate]       // proporciona ModalController como un proveedor
    });

    fixture = TestBed.createComponent(EscaneoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
