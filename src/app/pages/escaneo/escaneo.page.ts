import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escaneo',
  templateUrl: './escaneo.page.html',
  styleUrls: ['./escaneo.page.scss'],
})
export class EscaneoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  detalleEscaneo(){
    this.router.navigateByUrl('/detalle-escaneo');
  }
}
