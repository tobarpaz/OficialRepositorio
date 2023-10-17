import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  user:any;
  userFilter:any;
  regiones: any;
  comunas: any;

  constructor(private storage:StorageService,
              private location:LocationService
                                             ){}

  ngOnInit() {
    this.cargarUsuario();
  }

  async cargarUsuario(){
    this.user = await this.storage.obtenerUsuarios();
    this.regiones = (await this.location.getRegion()).data;
    this.comunas = (await this.location.getComuna(this.userFilter.getRegion)).data;
    console.log("USUARIOS REGISTRADOS:", this.user);

    this.userFilter = this.user.filter((e: { correo: string; }) => e.correo == this.storage.correoUsuario);
    this.userFilter = this.regiones.find((r: { region: string; }) => r.region === this.userFilter.region);
    this.userFilter = this.comunas.find((c: { comuna: string; }) => c.comuna === this.userFilter.comuna);
    //if(this.userFilter){
    //  const region = this.regiones.find((r: { region: string; }) => r.region === this.userFilter.region);
    //  const comuna = this.comunas.find((c: { comuna: string; }) => c.comuna === this.userFilter.comuna);
    //  this.userFilter.regionNombre = region ? region.nombre : 'No definido';
    //  this.userFilter.comunaNombre = comuna ? comuna.nombre : 'No definido';
    //}
  }

}
