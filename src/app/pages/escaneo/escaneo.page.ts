import { Component, OnDestroy ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmQRPage } from 'src/app/modals/confirm-qr/confirm-qr.page';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-escaneo',
  templateUrl: './escaneo.page.html',
  styleUrls: ['./escaneo.page.scss'],
})
export class EscaneoPage implements OnInit, OnDestroy {

  
  constructor(private router:Router,
              private helper:HelperService) { }
  ngOnInit() {
  }
  async scan(){
    var infoQr=[];
    infoQr.push(
                 {
                  asignatura: "ENG4567",
                  docente: "Carlos Fernández",
                  fecha: "24-09-2023",
                  hora:"10:45",
                  leccion: "Inglés Avanzado",
                  sala: "Aula 205",
                  seccion: "002D"
                 }
                );

                const parametros={dataQr:infoQr};
                this.helper.showModal(ConfirmQRPage,parametros);


  }

  ngOnDestroy(): void{
    console.log("Destruyendo el componente");
  }

  detalleEscaneo(){
    this.router.navigateByUrl('/detalle-escaneo');
  }

  


}