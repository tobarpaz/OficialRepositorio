import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redireccionLogin = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    canActivate:[AngularFireAuthGuard],
    data:{authGuardPipe: redireccionLogin},
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: ':passwordReset/restablecer',
    loadChildren: () => import('./pages/restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'escaneo',
    loadChildren: () => import('./pages/escaneo/escaneo.module').then( m => m.EscaneoPageModule)
  },
  {
    path: 'detalle-asig',
    loadChildren: () => import('./pages/detalle-asig/detalle-asig.module').then( m => m.DetalleAsigPageModule)
  },
  {
    path: 'registro-asig',
    loadChildren: () => import('./pages/registro-asig/registro-asig.module').then( m => m.RegistroAsigPageModule)
  },
  {
    path: 'detalle-escaneo',
    loadChildren: () => import('./pages/detalle-escaneo/detalle-escaneo.module').then( m => m.DetalleEscaneoPageModule)
  },  {
    path: 'perfil-usuario',
    loadChildren: () => import('./pages/perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule)
  },
  {
    path: 'confirm-qr',
    loadChildren: () => import('./modals/confirm-qr/confirm-qr.module').then( m => m.ConfirmQRPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }