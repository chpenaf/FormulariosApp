import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmailValidatorService } from '../../../shared/validator/email-validator.service';
import { ValidatorService } from '../../../shared/validator/validator.service';
// import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from '../../../shared/validator/validaciones';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  constructor(
    private _fb: FormBuilder,
    private _vs: ValidatorService,
    private _emailValidator: EmailValidatorService,
  ) {}

  miFormulario: FormGroup = this._fb.group({
    nombre: [ , [ Validators.required, Validators.pattern(this._vs.nombreApellidoPattern) ] ],
    email: [ , [ Validators.required, Validators.pattern(this._vs.emailPattern) ], [ this._emailValidator ] ],
    username: [ , [ Validators.required, this._vs.noPuedeSerStrider ] ],
    password: [ , [ Validators.required, Validators.minLength(6) ] ],
    password2: [ , [ Validators.required ] ],
  }, {
    validators: [ this._vs.camposIguales('password','password2') ]
  });

  get nombre() {
    return this.miFormulario.get('nombre');
  }

  get email() {
    return this.miFormulario.get('email');
  }
  
  get username() {
    return this.miFormulario.get('username');
  }

  get password() {
    return this.miFormulario.get('password');
  }

  get password2() {
    return this.miFormulario.get('password2');
  }

  get emailErrorMsg(): string {
    const errors = this.email?.errors;
    if ( errors?.['required'] ) {
      return 'Email requerido';
    } else if ( errors?.['pattern'] ) {
      return 'Texto ingresado no es un email';
    } else if ( errors?.['emailTomado'] ) {
      return 'Email ingresado ya existe en sistema';
    }
    return '';
  }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Christian Pena',
      email: 'email@test.com',
      username: 'christ1990',
    })
  }

  campoNoValido( campo: string ) {
    return this.miFormulario.get( campo )?.invalid
        && this.miFormulario.get( campo )?.touched;
  }

  submitForm() : void {

    if( this.miFormulario.invalid ) {
      this.miFormulario.markAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }

}
