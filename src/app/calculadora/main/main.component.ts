import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {


  resultado:string="";

  resultadoCalculo(result:string){
    this.resultado=result;
    console.log("Calculo padre:",this.resultado);
  }




}
