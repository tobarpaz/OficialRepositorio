import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-escaneo',
  templateUrl: './detalle-escaneo.page.html',
  styleUrls: ['./detalle-escaneo.page.scss'],
})
export class DetalleEscaneoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  regresar(){
    this.router.navigateByUrl("/inicio")
  }
}
