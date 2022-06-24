import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  constructor(
    private _fb: FormBuilder
  ) { }

  miFormulario: FormGroup = this._fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true ],
    terminos: [ false, Validators.requiredTrue ]

  });


  persona = {
    genero: 'F',
    notificaciones: true
  }

  ngOnInit(): void {
  }

  guardar() {
    const formValue = { ...this.miFormulario.value }
    delete formValue.terminos;

    this.persona = formValue;
  }

}
