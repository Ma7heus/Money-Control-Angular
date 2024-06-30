import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { ImportacaoComponent } from './views/importacao/importacao.component';
import { HistoricoComponent } from './views/historico/historico.component';
import { BuildingComponent } from './views/building/building.component';
import { FormImportacaoComponent } from './views/importacao/form-importacao/form-importacao.component';

const routes: Routes = [
  { path: '', redirectTo: 'building', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategoriaComponent },
  {
    path: 'import',
    children: [
      {
        path: '',
        component: ImportacaoComponent
      },
      {
        path: ':id',
        component: FormImportacaoComponent
      },
    ]
  },
  { path: 'history', component: HistoricoComponent },
  { path: 'building', component: BuildingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
