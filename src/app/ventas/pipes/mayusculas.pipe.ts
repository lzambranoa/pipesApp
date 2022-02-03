import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})

export class mayusculasPipe implements PipeTransform {

    transform(value: string, enMayusculas: boolean = true): string {
        if( enMayusculas ){
            return value.toUpperCase();
        }else {
            return value.toLowerCase();
        }
    }
}