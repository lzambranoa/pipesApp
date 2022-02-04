import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  enMayuscula: boolean = true

  heroes: Heroe[] =[
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Shazam',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Wonder Woman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Nightwing',
      vuela: false,
      color: Color.azul
    },
    {
      nombre: 'Linterna Verde',
      vuela: false,
      color: Color.verde
    },
  ]

  

  cambiarMayusculas () {
    if(this.enMayuscula) {
      this.enMayuscula = false
    }else {
      this.enMayuscula = true;
    }
  }

}
