import { Component, Input ,OnDestroy ,OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { ConfirmQRPage } from 'src/app/modals/confirm-qr/confirm-qr.page';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-escaneo',
  templateUrl: './escaneo.page.html',
  styleUrls: ['./escaneo.page.scss'],
})
export class EscaneoPage implements OnInit, OnDestroy {

  @Input() datos:any[]=[];
  
  datitos:any[]=[];
  
  constructor(private router:Router,
              private helper:HelperService,
              private storage:StorageService,
              private auth:AngularFireAuth)
              
              { }
  ngOnInit() {

  }


  async scan() {
    var scanQr = (await BarcodeScanner.scan()).code;
    const LLAVE = await this.auth.currentUser;
    if (scanQr) {
      await this.datitos.push(JSON.parse(scanQr));
      if(LLAVE?.email){
        this.datitos[0].correo = LLAVE?.email;
      }
      const parametro = {datos:this.datitos};
      await this.helper.showModal(ConfirmQRPage,parametro);
      console.log("2222",JSON.parse(scanQr));
      
    }
  }
  
  
  ngOnDestroy(): void{
  }

  detalleEscaneo(){
    this.router.navigateByUrl('/detalle-escaneo');
  }
}