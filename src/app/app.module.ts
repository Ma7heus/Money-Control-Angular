import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { TabelaComponent } from './core/common/components/tabela/tabela.component';
import { BuildingComponent } from './views/building/building.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { HistoricoComponent } from './views/historico/historico.component';
import { ImportacaoComponent } from './views/importacao/importacao.component';
import { McDialogComponent } from './core/common/components/mc-dialog/mc-dialog.component';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './views/navbar/navbar.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgChartsModule } from 'ng2-charts';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CategoriaComponent,
    HistoricoComponent,
    ImportacaoComponent,
    TabelaComponent,
    BuildingComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSortModule,
    McDialogComponent,
    MatExpansionModule,
    MatSelectModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MatTooltipModule,
    NgChartsModule,
    MatDialogModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
