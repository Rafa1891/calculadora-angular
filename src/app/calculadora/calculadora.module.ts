import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component';
import { CalcularComponent } from './calcular/calcular.component';
import { MostrarResultadoComponent } from './mostrar-resultado/mostrar-resultado.component';




@NgModule({
  declarations: [
    MainComponent,
   CalcularComponent,
   MostrarResultadoComponent
  ],
  exports:[
    MainComponent,
   CalcularComponent,
   MostrarResultadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CalculadoraModule { }
