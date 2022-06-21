import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  persona = {
    genero: '',
    notificaciones: true,
  }

  @ViewChild('miFormulario') miFormulario!: NgForm;

  terminosYCondiciones: boolean = false;

  constructor() { }

}
