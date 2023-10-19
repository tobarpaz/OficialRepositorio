import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:string = "";
  contrasena:string = "";

  constructor(private router:Router, 
              private helper:HelperService,
              private auth:AngularFireAuth,
              private storage:StorageService
  ){}

  ngOnInit() {
  }

  async onLogin(){
    const loader = await this.helper.showLoader("Cargando");

    if (this.usuario == "") {
      await loader.dismiss();
      this.helper.showAlert("Debes ingresar un usuario","Error");
      return;
    }
    if (this.contrasena == "") {
      await loader.dismiss();
      this.helper.showAlert("Debes ingresar una contraseña","Error");
      return;
    }
    try {
   
      const req = await this.auth.signInWithEmailAndPassword(this.usuario,this.contrasena);
      console.log("TOKEN", await req.user?.getIdToken());

      // this.storage.correoUsuario = this.usuario;
      console.log("USER" , req.user);
      

      await loader.dismiss();
      await this.router.navigateByUrl('inicio');

    } catch (error:any) {
      if (error.code == 'auth/invalid-email'){
        await loader.dismiss();
        await this.helper.showAlert("El correo no es el correcto.","Error");
      }
      if (error.code == 'auth/weak-password'){
        await loader.dismiss();
        await this.helper.showAlert("El largo de la contraseña es muy corto.","Error");
      }
      if(error.code == 'auth/invalid-login-credentials'){
        await loader.dismiss();
        await this.helper.showAlert("La contraseña o correo no es la correcta","Error");
      }
    }
  }

  restablecer(){
    this.router.navigateByUrl('/:passwordReset/restablecer') 
  }
  registro(){
    this.router.navigateByUrl('registro') 
  } 
}
