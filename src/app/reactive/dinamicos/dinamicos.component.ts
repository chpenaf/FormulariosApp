import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  constructor(
    private _fb: FormBuilder
  ) { }

  miFormulario: FormGroup = this._fb.group({
    nombre: [ , [ Validators.required, Validators.minLength(3) ] ],
    favoritos: this._fb.array( [
      ['Resident Evil' ],
      ['Metal Gear'],
    ], Validators.required )
  })

  nuevoFavorito: FormControl = this._fb.control('', Validators.required );

  get favoritosArray() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  ngOnInit(): void {
    console.log('holi');
  }

  campoNoValido( campo: string ) {
    return this.miFormulario.controls[ campo ].errors
	      && this.miFormulario.controls[ campo ].touched;
  }
  
  agregarFavorito() : void {
    if( this.nuevoFavorito.invalid ) { return; }

    (this.favoritosArray).push( 
      this._fb.control( this.nuevoFavorito.value, Validators.required ) );
    
    this.nuevoFavorito.reset();

  }

  eliminarFavorito( index: number ) {
    this.favoritosArray.removeAt(index);
  }

  guardar(): void {

    if( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);

    this.miFormulario.reset();
  }

}
