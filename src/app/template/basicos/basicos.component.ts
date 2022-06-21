import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  get producto(){
    return this.miFormulario?.controls['producto'];
  }

  get precio(){
    return this.miFormulario?.controls['precio'];
  }

  nombreValido(): boolean {
    return this.producto?.invalid && this.producto?.touched;
  }

  precioValido(): boolean {
    return this.precio?.touched && this.precio?.value < 0;
  }

  ngOnInit(): void {
  }

  guardar( ) {
    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }

}
