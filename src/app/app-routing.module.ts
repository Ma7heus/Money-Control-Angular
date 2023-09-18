import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { ImportacaoComponent } from './componentes/importacao/importacao.component';
import { HistoricoComponent } from './componentes/historico/historico.component';
import { BuildingComponent } from './componentes/building/building.component';

const routes: Routes = [
  { path: '', redirectTo: 'building', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategoriaComponent },
  { path: 'import', component: ImportacaoComponent },
  { path: 'history', component: HistoricoComponent },
  { path: 'building', component: BuildingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
