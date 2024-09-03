import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-juros-simples',
  templateUrl: './calcular-juros-simples.component.html',
  styleUrls: ['./calcular-juros-simples.component.css']
})
export class CalcularJurosSimplesComponent {
  capitalInicial: number = 0;
  taxaJurosAnual: number = 0;
  periodoTempo: number = 0;
  jurosSimples: number = 0;
  montanteTotal: number = 0;

  public calcularJuros() {
    const juros = this.capitalInicial * (this.taxaJurosAnual/100) * this.periodoTempo;
    this.jurosSimples = juros;
    this.montanteTotal = this.capitalInicial + juros;
  }
}