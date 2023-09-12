import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-asig',
  templateUrl: './registro-asig.page.html',
  styleUrls: ['./registro-asig.page.scss'],
})
export class RegistroAsigPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  detalleasig(){
    this.router.navigateByUrl("/detalle-asig")
  }

}
