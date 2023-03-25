import { FuncionarioDTO } from './../models/funcionario.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



import { EndpointsConstant } from 'src/app/constants/endpoints.constant';
import { FuncionarioDTO } from 'src/app/models/funcionario.dto';

@Injectable({ providedIn: 'root' })
export class FuncionariosApi {
    constructor(private http: HttpClient) { }

    adquirirTodos(): Observable<Array<FuncionarioDTO>> {
<<<<<<< HEAD
        return this.http.get<Array<FuncionarioDTO>>(EndpointsConstant.FUNCIONARIOS.buscarFuncionarios)
                        .pipe(map(listaFuncionarios => { return listaFuncionarios; }))
=======
        return this.http.get<Array<FuncionarioDTO>>(EndpointsConstant.FUNCIONARIOS.buscarFuncionarios).pipe(
            map(funciorios => {
                return funciorios;
            })
        );
    }
    salvar(funcionarioDTO: FuncionarioDTO): Observable<FuncionarioDTO> {
        return this.http.post<FuncionarioDTO>(EndpointsConstant.FUNCIONARIOS.salvarFuncionarios, funcionarioDTO)
>>>>>>> 8705bd244266a7bbdeeee34d80331d23a3dd2edf
    }

    salvar(funcionarioDTO: FuncionarioDTO): Observable<FuncionarioDTO> {
        return this.http.post<FuncionarioDTO>(EndpointsConstant.FUNCIONARIOS.salvarFuncionarios, funcionarioDTO)
    }
}