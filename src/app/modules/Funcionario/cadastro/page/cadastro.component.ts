import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FuncionariosApi } from 'src/app/api/funcionarios.api';
import { RotasConstant } from 'src/app/constants/rotas.constant';
import { FuncionarioDTO } from 'src/app/models/funcionario.dto';



@Component({
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
    // @ts-ignore
    formCliente: FormGroup;
<<<<<<< HEAD

    constructor(private formBuilder: FormBuilder, private funcionarioApi: FuncionariosApi, private router: Router) { }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.formCliente = this.formBuilder.group({
            nome: ['', [Validators.required, Validators.minLength(8)]],
            numDep: ['', [Validators.required]],
            salario: ['', [Validators.required]],
            nascimento: ['', [Validators.required]],

        })
=======
    constructor(private formBuilder: FormBuilder, private funcionarioApi: FuncionariosApi, private router: Router) { }

    ngOnInit() {
        this.formCliente = this.formBuilder.group({
            nome: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
            numDep: [0, [Validators.required]],
            salario: [0, [Validators.required]],
            nascimento: ['', [Validators.required]],
        });
>>>>>>> 8705bd244266a7bbdeeee34d80331d23a3dd2edf
    }

    onSubmit() {
        let form = this.formCliente.value;
        if (this.formCliente.valid) {
            this.funcionarioApi.salvar(new FuncionarioDTO(form.nome, form.numDep, form.salario, form.nascimento)).subscribe(retorno => {
                this.voltar()
            });
        } else {
            alert('Dados invalidos');
        }

<<<<<<< HEAD
=======
    onSubmit() {
        if (this.formCliente.valid) {
            var funcionario = this.formCliente.value;
            this.funcionarioApi.salvar(new FuncionarioDTO(funcionario.nome, funcionario.numDep, funcionario.salario, funcionario.nascimento)).subscribe(retorno => {
                this.voltar();
            });
        } else {
            alert('Dados invalidos')
        }
>>>>>>> 8705bd244266a7bbdeeee34d80331d23a3dd2edf
    }
    voltar() {
        this.router.navigate([RotasConstant.LISTAGEM]);
    }

<<<<<<< HEAD
}
=======
}
>>>>>>> 8705bd244266a7bbdeeee34d80331d23a3dd2edf
