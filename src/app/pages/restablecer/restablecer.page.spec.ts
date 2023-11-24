import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestablecerPage } from './restablecer.page';
import { AngularDelegate, IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

describe('RestablecerPage', () => {
  let component: RestablecerPage;
  let fixture: ComponentFixture<RestablecerPage>;

  beforeEach(() => {

    const activatedRouteStub = {
      snapshot: {
        params: {
          idempleado: 123,  // proporcionar un valor simulado para 'idempleado'
        },
      },
      paramMap: new BehaviorSubject({}),
    };


    TestBed.configureTestingModule({

      imports: [IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebaseConfig), 
        AngularFireAuthModule,],
        
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub },ModalController, AngularDelegate],       // Proporciona ModalController como un proveedor
    });

    fixture = TestBed.createComponent(RestablecerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
