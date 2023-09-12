import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  name:string = "";
  lastName:string = "";
  email:string = "";
  password:string = "";
  confirmPassword:string = "";

  constructor(private router:Router, private helper:HelperService) { }

  ngOnInit() {
  }

  onRegister(){

    if(!this.name || !this.lastName || !this.email || !this.password || !this.confirmPassword){
      this.helper.showAlert("Por favor, complete todos los campos.","Error");
      return;
    }

    if(this.password !== this.confirmPassword){
      this.helper.showAlert("Las contraseñas no coinciden.","Error");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailPattern.test(this.email)){
      this.helper.showAlert("Ingrese un Correo electrónico válido","Error");
      return;
    }

    this.helper.showAlert("¡Registro exitoso!","Éxito");
    this.router.navigateByUrl('login');

  }

}
