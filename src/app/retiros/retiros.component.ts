import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-retiros',
  templateUrl: './retiros.component.html',
  styleUrls: ['./retiros.component.css']
})
export class RetirosComponent implements OnInit {

  disponible: number = 0
  cuentaNombre: string = ""
  valorRetiro: number = 0
  valorRetiroControl = new FormControl(0, [Validators.required, Validators.min(1000), Validators.max(1000000)])
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.disponible = this.activatedRoute.snapshot.params.disponible;
    this.cuentaNombre = this.activatedRoute.snapshot.params.cuenta;
  }

  retirar() {
    console.log(this.valorRetiro)
  }

  getErrorMessage() {
    if(this.valorRetiroControl.hasError('required')){
      return 'Debe introducir un valor de retiro';
    }

    if(this.valorRetiroControl.hasError('min') || this.valorRetiroControl.hasError('max')) {
      return 'El valor de retiro indicado es incorrecto';
    }

    return '';
  }

}
