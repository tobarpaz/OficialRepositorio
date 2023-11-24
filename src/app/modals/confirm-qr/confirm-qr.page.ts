import { Component, Input, OnInit } from '@angular/core';
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

  datitos:any=[];
  constructor(private modalController:ModalController,
              private storage:StorageService,
              private helper:HelperService) { }

  ngOnInit() {
    console.log("33333",this.datos);
    this.datitos = this.datos;
    console.log("Datos asignados a this.datitos:", this.datitos);
  }
  
  async confirm() {
    const loader = await this.helper.showLoader("Cargando");
  
    try {
      const asistenciaExistente = await this.asistenciaYaRegistrada(this.datos);
  
      if (asistenciaExistente) {
        console.log('La asistencia ya está registrada. No se guardará nuevamente.');
        await this.helper.showAlert("La asistencia ya está registrada. No se guardará nuevamente.", "Información");
      } else {
        await this.storage.guardarAsistencia(this.datos);
        console.log("Se guardaron los datos", this.datos);
      }
    } catch (error) {
      console.error("Error al procesar la asistencia:", error);
    } finally {
      await loader.dismiss();
      this.modalController.dismiss();
    }
  }
  
  close(){
    this.modalController.dismiss();
    console.log("Se cancelo la asistencia");
    
  }

  async asistenciaYaRegistrada(asistencia: any): Promise<boolean> {
    const asistencias = await this.storage.asistencia();
    return asistencias.some((a: any) => this.sonAsistenciasIguales(a, asistencia));
  }

  sonAsistenciasIguales(asistencia1: any, asistencia2: any): boolean {
    return (
      asistencia1.asignatura == asistencia2.asignatura &&
      asistencia1.docente == asistencia2.docente &&
      asistencia1.fecha == asistencia2.fecha
    );
  }

}

