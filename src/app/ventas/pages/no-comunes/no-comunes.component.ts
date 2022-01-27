import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nSelect
 nombre: string = 'Leonardo';
 genero: string = 'masculino';

 invitacionMapping = {
   'masculino': 'invitarlo',
   'femenino': 'invitarla'
 }

 //i18nPlural
 clientes: string[] = ['leonardo', 'alejandra', 'lizeth'];
 clientesMap = {
   '=0': 'no tenemos ningun cliente esperando',
   '=1': 'tenemos un cliente esperando',
   '=2': 'tenemos dos clientes esperando',
   'other': 'tenemos # clientes esperando'
 }

 cambiarCliente() {
   this.nombre = 'Alejandra';
   this.genero = 'femenino';

 }

 borrarCliente(){
    this.clientes.pop()
 }

}
