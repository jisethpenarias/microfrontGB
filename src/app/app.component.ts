import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'consultaSaldo';
  // cuenta: {nombre: string, cuentaNumero: string, saldo: number} = {
  //   "nombre": "Cuenta de Ahorros",
  //   "cuentaNumero": "xxxxxxxxx85",
  //   "saldo": 100000
  // }
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
  usuario: string = "Jiseth"
}
