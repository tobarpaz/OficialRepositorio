import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Preferences } from '@capacitor/preferences';


const keyStorageUser = "usuarioData";
const keyStorageCurrentUser = "currentUser";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  public correoUsuario: string = "";

  constructor(private authFire:AngularFireAuth){}

  async getItem(llave:string):Promise<string | null>{
    const obj = await Preferences.get({key:llave});
    return obj.value;
  }

  async setItem(llave:string, valor:string){
    await Preferences.set({key:llave, value:valor});
  }


  async obtenerUsuarios(){
    const usuarios = await this.getItem(keyStorageUser);

    if(usuarios == null){
      return [];
    }

    const users = JSON.parse(usuarios);

    if(users){
      return users;
    }
    else
    {
      return [];
    }
  }

  async obtenerRegiones(){
    const regiones = await this.getItem(keyStorageUser);

    if(regiones == null){
      return [];
    }

    const regionSel = JSON.parse(regiones);

    if(regiones){
      return regiones;
    }
    else
    {
      return [];
    }
  }

  async guardarRegion(region:any){
    const usersStorage = await this.obtenerRegiones();
    for(const i of usersStorage){
      if(i){
        region.push(i);
      }
    }
    this.setItem(keyStorageUser,JSON.stringify(region));
  }




  async guardarUsuario(usuario:any){
    const usersStorage = await this.obtenerUsuarios();
    for(const i of usersStorage){
      if(i){
        usuario.push(i);
      }
    }
    this.setItem(keyStorageUser,JSON.stringify(usuario));
  }

}