import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent  {

  num1:number=0;
  num2:number=0;



    suma(num1:number,num2:number):number{

       return this.num1+this.num2;


      }

    resta(num1:number,num2:number):number{
        return this.num1-this.num2;
      }

    multiplica(num1:number,num2:number):number{
        return this.num1*this.num2;
          }


    divide(num1:number,num2:number):any{


                   if(this.num2==0){

                      return "División por 0"
                   }else{
                    return this.num1/this.num2;
                   }

                  }



    limpia(){
                     /*
                      document.getElementById("num1").value="";
                      document.getElementById("num2").value="";
                      document.getElementById("calculadora").innerHTML="";

*/


               }




}
