import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-mostrar-resultado',
  templateUrl: './mostrar-resultado.component.html',
  styleUrls: ['./mostrar-resultado.component.css']
})
export class MostrarResultadoComponent {
//de padre a hijo
@Input() result:string="";


}
