import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import{Inicio} from 'src/app/models/inicio';
import { AnimationController, IonCard, MenuController } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { StorageService } from 'src/app/services/storage.service';

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

  constructor(private router:Router, 
              private animationCtrl: AnimationController,
              private helper:HelperService,
              private auth:AngularFireAuth,
              private storage:StorageService,
              private menuCtrl:MenuController){}

  ngOnInit(){ 
    this.cargarInicio();
    setTimeout(()=>{this.loading=false},3000)
    this.helper.showtoast("¡¡¡Bienvenido esclavo de Duoc!!!")
  }
  
  profileUser(){
    this.menuCtrl.close();
    this.router.navigateByUrl("perfil-usuario");
  }

  menu(){
    this.menuCtrl.toggle();
  }

  closeMenu(){
    this.menuCtrl.close();
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

  async cargaUsuarios(){
    console.log("USUARIOS", await this.storage.obtenerUsuarios());
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
  
  escaneo(){
    this.router.navigateByUrl("/escaneo")
  }
  registroasig(){
    this.router.navigateByUrl("/registro-asig")
  }

  async logout(){
    var confirm = await this.helper.showConfirm("¿Desea cerrar la sesión actual?","Confirmar","Cancelar");
    if(confirm == true ){
      await this.auth.signOut();
      this.router.navigateByUrl("login");
    }
  }

}
