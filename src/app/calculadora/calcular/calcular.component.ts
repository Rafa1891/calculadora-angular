import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent  {

num1:number=NaN;
num2:number=NaN;
resultado:string="";
//de hijo a padre
@Output() resultadoEvent:EventEmitter<string>=new EventEmitter() ;

  sumar():void{
    this.resultado= "El resultado es: "+String(this.num1+this.num2);
    this.resultadoEvent.emit(this.resultado);
   }

   restar():void{
     this.resultado= "El resultado es: "+String(this.num1-this.num2);
     this.resultadoEvent.emit(this.resultado);
    }

    multiplicar():void{
     this.resultado= "El resultado es: "+String(this.num1*this.num2);
     this.resultadoEvent.emit(this.resultado);
    }

    dividir():void{
     if(this.num2==0){
       this.resultado="División por 0";
       this.resultadoEvent.emit(this.resultado);
    }else{
     this.resultado="El resultado es: "+String(this.num1/this.num2);
     this.resultadoEvent.emit(this.resultado);
    }
    }

    limpiar(){
      this.num1=NaN;
      this.num2=NaN;

      this.resultado="";
      this.resultadoEvent.emit(this.resultado);

    }


}
