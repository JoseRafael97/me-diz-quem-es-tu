import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DeputadosComponent } from './deputados/deputados.component';



const appRoutes: Routes = [

  { path: '', component: HomeComponent},

  { path: 'deputadodiscurso', component: DeputadosComponent},

  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
