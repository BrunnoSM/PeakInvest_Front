import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  usuarioId: number = 0;
  public retorno: any;

  constructor(private data: DataService) { }

  ngOnInit(): void { }

  consultar() {
    this.data.consultarUsuario(this.usuarioId).subscribe(
      (response: any) => {
        this.retorno = response;
      }
    );
  }

}
