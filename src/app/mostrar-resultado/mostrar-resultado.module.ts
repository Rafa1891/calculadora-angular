import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarResultadoComponent } from './mostrar-resultado.component';





@NgModule({
  declarations: [
    MostrarResultadoComponent
  ],
  exports: [
    MostrarResultadoComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class MostrarResultadoModule { }
