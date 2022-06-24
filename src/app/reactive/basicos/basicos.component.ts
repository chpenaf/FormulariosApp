import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 3090'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5),
  // })


  constructor(
    private _fb: FormBuilder,
    private _router: Router
    ) { }

  miFormulario: FormGroup = this._fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3) ] ],
    precio: [0, [ Validators.required, Validators.min(0) ] ],
    existencias: [0, [ Validators.required, Validators.min(0) ] ]
  })

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'RTX 4080ti',
      precio: 1600
    });
  }

  get nombre() {
    return this.miFormulario.controls['nombre'];
  }

  get precio() {
    return this.miFormulario.controls['precio'];
  }

  get existencias() {
    return this.miFormulario.controls['existencias'];
  }

  campoNoValido( campo: string ) {

    return this.miFormulario.controls[campo].errors
	&& this.miFormulario.controls[campo].touched;
  }

  guardar() {
    if( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log('submit');
    console.log(this.miFormulario.value);

    this.miFormulario.reset();
  }

}
