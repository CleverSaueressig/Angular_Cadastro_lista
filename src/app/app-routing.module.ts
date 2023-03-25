import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotasConstant } from 'src/app/constants/rotas.constant';
import { CadastroModule } from 'src/app/modules/Funcionario/cadastro/cadastro.module';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: RotasConstant.LISTAGEM
    },
    {
        path: RotasConstant.LISTAGEM,
<<<<<<< HEAD
        loadChildren: () => import('./modules/Funcionario/listagem/listagem.module')
                            .then(m => m.ListagemModule),
        data: { animation: 'fade' }
    },
    {
        path: RotasConstant.CADASTRO,
        loadChildren: () => import('./modules/Funcionario/cadastro/cadastro.module')
                            .then(m => m.CadastroModule),
=======
        loadChildren: () => import('./modules/Funcionario/listagem/listagem.module').then(m => m.ListagemModule),
        data: { animation: 'fade' }

    }, {
        path: RotasConstant.CADASTRO,
        loadChildren: () => import('./modules/Funcionario/cadastro/cadastro.module').then(m => m.CadastroModule),
>>>>>>> 8705bd244266a7bbdeeee34d80331d23a3dd2edf
        data: { animation: 'fade' }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }