import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 3090'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5),
  // })


  constructor(
    private _fb: FormBuilder
    ) { }

  miFormulario: FormGroup = this._fb.group({
    nombre: [ 'RTX 4080ti', ],
    precio: [0, ],
    existencias: [0, ]
  })

}
