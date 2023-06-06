import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-investimento',
  templateUrl: './investimento.component.html'
})
export class InvestimentoComponent implements OnInit {

  parcelas: number = 0;
  valor: number = 0;
  public resultado: any;

  constructor(private data: DataService) { }

  ngOnInit(): void { }

  realizarSimulacao() {
    this.data.simularInvestimento(this.parcelas, this.valor).subscribe(
      (response: any) => {
        this.resultado = response;
      }
    );
  }
}
