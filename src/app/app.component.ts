import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string  = 'Jose Sakuda';
  nombre2: string = 'JoSe SaKUDa CAstRo';
  arreglo: number[] = [1, 2 , 3 , 4 , 5 , 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 12345.2;
  fecha: Date = new Date();
  idioma: string = '';
  videoUrl: string = 'https://www.youtube.com/embed/tH0ufMltu2I';
  pass: string = 'HOLAAAAAAAAAAAAAAAA';
  activar: boolean = true;

  valPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
      });

  objetoPersona = {
    nombre: 'jose',
    apellido: 'Sakuda',
    edad: 34,
    direccion: {
      calle: 'Avenida siempre viva',
      casa: 4
    }
  };
}
