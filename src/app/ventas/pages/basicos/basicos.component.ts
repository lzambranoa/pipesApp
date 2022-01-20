import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

 nombreUpper: string = 'LEONARDO ZAMBRANO';
 nombreLower: string = 'leonardo zambrano';
 nombreCompleto: string = 'LeoNaRDo ZambraNO';

 fecha: Date = new Date();  // el día de hoy

}
