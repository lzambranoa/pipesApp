import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})

export class vuelaPipe implements PipeTransform {

    transform(value: boolean): string {
        if( value ){
            return 'vuela';
        }else {
            return 'no vuela';
        }
    }
}