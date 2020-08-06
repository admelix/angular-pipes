import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'mostrar'
})
export class MostrarPipe implements PipeTransform {

  transform(value: string, entrada: boolean = true ): string {

    return ( entrada ) ? '*'.repeat( value.length ) : value;

  }

}
