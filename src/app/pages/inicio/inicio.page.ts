import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import{Inicio} from 'src/app/models/inicio';
import { AnimationController, IonCard } from '@ionic/angular';
import type { Animation } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  @ViewChild(IonCard, { read: ElementRef })
  card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;

  inicioArray:Inicio[]=[];

  loading:boolean= true;

  constructor(private router:Router, private animationCtrl: AnimationController) { }
  ngOnInit(){ 
   this.cargarInicio();
   setTimeout(()=>{this.loading=false},3000)
    
  }
  
  ionViewWillEnter() {
    const refs = document.querySelectorAll("ion-content");

    if (refs) {
      const animation: Animation = this.animationCtrl.create()
      .addElement(refs)
      .duration(1000)
      .iterations(1)
      .fromTo('opacity', '0', '1')
      .fromTo('transform', 'translateX(-100%)', 'translateX(0)');
      animation.play();
    }
  }

 cargarInicio(){
  this.inicioArray.push(
  { id:1,
    icono:"scan-circle-outline",
    nombre:"Escanear",
    url:"/escaneo"


  },
  {
    id:2,
    icono:"library-outline",
    nombre:"Asignatura Alumno",
    url:"/registro-asig"
  }
  )
 }

 

  atrasSesion(){
    this.router.navigateByUrl("/login");
  }
  
  escaneo(){
    this.router.navigateByUrl("/escaneo")
  }
  registroasig(){
    this.router.navigateByUrl("/registro-asig")
  }

}
