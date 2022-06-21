import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
    `
    li {
        cursor: pointer;
    }
    `
  ]
})
export class DinamicosComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm; // asd

  persona : Persona = {
    nombre: 'Christian',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'Resident Evil' }
    ]
  }

  nuevoJuego: string = '';

  constructor() { }

  get nombre(){
    return this.myForm?.controls['nombre'];
  }

  ngOnInit(): void {
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index,1);
  }

  agregar(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    };
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }

  guardar() {
    console.log('posteado');
  }
}
