import { Component, Input ,OnDestroy ,OnInit } from '@angular/core';
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

  
  datitos:any[]=[];
  
  constructor(private router:Router,
              private helper:HelperService,
              private storage:StorageService)
              
              { }
  ngOnInit() {
    this.scan();
  }


  async scan(){
  var scanQr=(await BarcodeScanner.scan()).code;
  if(scanQr){
    const parametro = {datos:JSON.parse(scanQr)};
    await this.helper.showModal(ConfirmQRPage,parametro);
    this.datitos = parametro.datos;
    console.log("222",this.datitos);

  return;
 }

  }

  ngOnDestroy(): void{
  }

  detalleEscaneo(){
    this.router.navigateByUrl('/detalle-escaneo');
  }
}