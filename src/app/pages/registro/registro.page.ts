import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { LocationService } from 'src/app/services/location.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  //name:string = "";
  //lastName:string = "";
  usuario:string = "";
  contrasena:string = "";
  //confirmPassword:string = "";

  constructor(private router:Router, 
              private helper:HelperService,
              private auth:AngularFireAuth,
              private storage:StorageService,
              private locationService:LocationService) { }

  ngOnInit() {
  }

  async onRegister(){
    const loader = await this.helper.showLoader("Cargando");
    if(this.usuario == ''){
      await loader.dismiss();
      await this.helper.showAlert("Debe ingresar un correo","Error");
      return;
    }

    var user =
    [
      {
        correo:this.usuario,
        contrasena:this.contrasena
      }
    ]
    try {
      const request = await this.auth.createUserWithEmailAndPassword(this.usuario,this.contrasena);
        this.storage.guardarUsuario(user);
      await this.router.navigateByUrl('login');
      await loader.dismiss();
      await this.helper.showAlert("Usuario registrado correctamente.","Información");
    } catch (error:any) {
      if(error.code = 'auth/email-already-in-use'){
        await loader.dismiss();
        await this.helper.showAlert("El correo ya se encuentra registrado.","Error");
      }
      if(error.code = 'auth/invalid-email'){
        await loader.dismiss();
        await this.helper.showAlert("El correo no es el correcto.","Error");
      }
      if(error.code = 'auth/weak-password'){
        await loader.dismiss();
        await this.helper.showAlert("El largo de la contraseña es muy corto.","Error");
      }
    }
  }





  // onRegister(){

  //   if(!this.name || !this.lastName || !this.email || !this.password || !this.confirmPassword){
  //     this.helper.showAlert("Por favor, complete todos los campos.","Error");
  //     return;
  //   }

  //   if(this.password !== this.confirmPassword){
  //     this.helper.showAlert("Las contraseñas no coinciden.","Error");
  //     return;
  //   }

  //   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //   if(!emailPattern.test(this.email)){
  //     this.helper.showAlert("Ingrese un Correo electrónico válido","Error");
  //     return;
  //   }

  //   this.helper.showAlert("¡Registro exitoso!","Éxito");
  //   this.router.navigateByUrl('login');

  // }

}
