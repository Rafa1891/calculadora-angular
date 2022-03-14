import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalcularComponent } from './calcular.component';
import { MostrarResultadoComponent } from '../mostrar-resultado/mostrar-resultado.component';



@NgModule({
  declarations: [
CalcularComponent
  ],
  exports: [
    CalcularComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CalcularModule { }
