import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario:string = "";
  contrasena:string = "";

  constructor(private router:Router, private helper:HelperService) { }

  ngOnInit() {
  }
onLogin(){

    if (this.usuario == "") {
      this.helper.showAlert("Debes ingresar un usuario","Error");
      return;
    }
    if (this.contrasena == "") {
      this.helper.showAlert("Debes ingresar una contraseña","Error");
      return;
    }

    if (this.usuario == "pgy4121-001d" && this.contrasena == "pgy4121-001d") {
    
      this.router.navigateByUrl('inicio');
    }else{
      this.helper.showAlert("Correo o contraseña incorrecto.","Error");
    }
  }

  restablecer(){
    
      this.router.navigateByUrl('restablecer') 
  }
  registro(){
    
    this.router.navigateByUrl('registro') 
}
}
