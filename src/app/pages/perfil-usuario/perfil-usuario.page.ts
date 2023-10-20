import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  user:any;
  userFilter:any;
  regiones: any;
  regionFilter: any;

  constructor(private storage:StorageService,
              private location:LocationService,
              private auth:AngularFireAuth
                                              ){}

  ngOnInit() {
    this.cargarUsuario();
    //this.cargarRegion();
  }

  async cargarUsuario(){
    this.user = await this.storage.obtenerUsuarios();
    this.regiones = await this.location.getRegion();
    var emailUserToken = await  this.auth.currentUser;

    
    this.userFilter = this.user.filter((e: { correo: string; }) => e.correo == emailUserToken?.email);
    
    console.log("Usuario filtrado:", this.userFilter);
    // console.log("Usuario filtrado:", userFilt);

    if (this.userFilter) {
      console.log("Usuario filtrado:", this.userFilter);
      console.log("Comunas:", this.regiones);
      //this.regiones = this.regiones.filter((e: { nombre: string;  }) => e.nombre == e.nombre);

      this.regiones = (await this.location.getComuna(this.userFilter.region)).data;
    }

  }

  // async cargarRegion(){
  //   this.regiones = await this.storage.obtenerRegiones();
  //   console.log("regiones:", this.regiones );
  //   this.regionFilter = this.regiones.filter((e: { nombre: string;  }) => e.nombre == e.nombre);
  //   console.log("FILTRADO REGIONES:", this.regionFilter);
  // }

}
