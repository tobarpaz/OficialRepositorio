import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Comuna } from 'src/app/models/comuna';
import { Region } from 'src/app/models/region';
import { HelperService } from 'src/app/services/helper.service';
import { LocationService } from 'src/app/services/location.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  name:string = "";
  lastName:string = "";
  usuario:string = "";
  contrasena:string = "";
  confirmContrasena:string = "";
  regiones:Region[]=[];
  comunas:Comuna[]=[];
  regionSel:number = 0;
  comunaSel:number = 0;



  disabledComuna:boolean = true;

  constructor(private router:Router, 
              private helper:HelperService,
              private auth:AngularFireAuth,
              private storage:StorageService,
              private locationService:LocationService) { }

  ngOnInit() {
    this.cargarRegion();
  }

  async cargarRegion(){
      const req =await this.locationService.getRegion();
      this.regiones=req.data;
     


    }

  async cargarComuna(){
   try{const req= await this.locationService.getComuna(this.regionSel)
   this.comunas=req.data;
   this.disabledComuna=false;
  } catch(error:any){
    await this.helper.showAlert(error.error.msg,"Error");
  }

  }
  

  async onRegister(){
    const loader = await this.helper.showLoader("Cargando");
    if(this.name.trim() === '' || this.lastName.trim() === '' ||
      this.usuario === '' || this.contrasena.trim() === '' || this.confirmContrasena.trim() === ''||
      this.regionSel === 0 || this.comunaSel === 0){
      await loader.dismiss();
      await this.helper.showAlert("Debes rellenar todos los campos","Error");
      return;
    }

    if(this.contrasena !== this.confirmContrasena){
      await loader.dismiss();
      await this.helper.showAlert("Las contraseseñas no coinciden", "Error");
      return;
    }

    if(this.contrasena.length < 6 || this.contrasena.length > 10){
      await loader.dismiss();
      await this.helper.showAlert("La contraseña debe tener entre 6 y 10 caracteres", "Error")
    }
  
    var user =
    [
      {
        correo:this.usuario,
        contrasena:this.contrasena,
        nombre: this.name,
        apellido: this.lastName,
        region: this.regionSel,
        comuna: this.comunaSel
      }
    ]
    try {
      const request = await this.auth.createUserWithEmailAndPassword(this.usuario,this.contrasena);
        this.storage.guardarUsuario(user);
        
      await this.router.navigateByUrl('login');
      await loader.dismiss();
      await this.helper.showAlert("Usuario registrado correctamente.","Información");
    } catch (error:any) {
      if(error.code == 'auth/email-already-in-use'){
        await loader.dismiss();
        await this.helper.showAlert("El correo ya se encuentra registrado.","Error");
      }
      if(error.code == 'auth/invalid-email'){
        await loader.dismiss();
        await this.helper.showAlert("El correo no es el correcto.","Error");
      }
      if(error.code == 'auth/weak-password'){
        await loader.dismiss();
        await this.helper.showAlert("El largo de la contraseña es muy corto.","Error");
      }
    }
  }
}
