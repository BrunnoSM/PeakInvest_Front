import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class DataService {

    constructor(private http: HttpClient) {
    }

    consultarUsuario(idUsuario: number) {
        return this.http.get<any>('https://localhost:5010/usuario?id=' + idUsuario);
    }

    simularInvestimento(parcelas: number, valor: number) {
        return this.http.get<any>('https://localhost:5010/calcular?numeroDeParcelas=' + parcelas + '&valorDoEmprestimo=' + valor);
    }
}