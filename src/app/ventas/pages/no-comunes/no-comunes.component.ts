import { Component } from '@angular/core';
import { interval } from 'rxjs';

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
 clientes: string[] = ['leonardo', 'alejandra', 'lizeth', 'daniela', 'fabiola'];
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

 // Keyvalue Pipe
 persona = {
   nombre: 'Leonardo Zambrano',
   edad: 42,
   direccion: 'Bogotá, Colombia'
 }

 //JsonPipe
 heroes = [
   {
     nombre: 'Superman',
     vuela: true
   },
   {
     nombre: 'Batman',
     vuela: false
   },
   {
     nombre: 'Wonder Woman',
     vuela: true
   },
   {
     nombre: 'Acuaman',
     vuela: false
   },
 ]

 //AsyncPipe
 myObservable = interval(5000);

 valorPromesa = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve( 'Tenemos data de la promesa')
  }, 3500);

 })

}
