import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FuncionariosApi } from 'src/app/api/funcionarios.api';
import { RotasConstant } from 'src/app/constants/rotas.constant';
import { FuncionarioDTO } from 'src/app/models/funcionario.dto';




@Component({
    templateUrl: './listagem.component.html',
    styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
    listaFuncionarios: FuncionarioDTO[] = [];

    constructor(private funcionarioApi: FuncionariosApi, private router: Router) { }

    ngOnInit() {
        this.funcionarioApi.adquirirTodos().subscribe(retorno => { 
            this.listaFuncionarios = retorno;
        });
    }

    navegarCadastro() {
    this.router.navigate([RotasConstant])
    }

}
