import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-qr',
  templateUrl: './confirm-qr.page.html',
  styleUrls: ['./confirm-qr.page.scss'],
})
export class ConfirmQRPage implements OnInit {

  @Input() dataQr:any[]=[];
  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalController.dismiss();
  }

}
