import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-confirm-qr',
  templateUrl: './confirm-qr.page.html',
  styleUrls: ['./confirm-qr.page.scss'],
})
export class ConfirmQRPage implements OnInit {

  
  @Input() datos:any[]=[];

  asd:any=[];
  constructor(private modalController:ModalController,
              private storage:StorageService,
              private helper:HelperService,
              private router: Router) { }

  ngOnInit() {
    console.log("33333",this.datos);
    this.asd.push(this.datos);
    this.confirm();
  }
  
  async confirm(){
    var confirm=await this.helper.showConfirm("Confirme el registro de asistencia", "Confirmar","Cancelar");
    if(confirm == true){
      await this.storage.guardarAsistencia(this.datos);
      return;
    }
  }
  
  close(){
    this.modalController.dismiss();
  }

}
