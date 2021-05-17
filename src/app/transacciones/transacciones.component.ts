import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})
export class TransaccionesComponent implements OnInit {

  // @Input() cuentas;
  cuentas: {nombre: string, cuentaNumero: string, saldo: number}[] = [
    {
      "nombre": "Cuenta de Ahorros",
      "cuentaNumero": "xxxxxxxxx85",
      "saldo": 100000
    },
    {
      "nombre": "CDT",
      "cuentaNumero": "xxxxxxxxx20",
      "saldo": 100000
    },
    {
      "nombre": "Cuenta Corriente",
      "cuentaNumero": "xxxxxxx7789",
      "saldo": 100000
    }
  ]
  constructor(
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
