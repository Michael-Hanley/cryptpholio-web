import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { CoinMarketComponent } from './market/coin-market/coin-market.component';
import { CoinComponent } from './market/coin/coin.component';
import { MainChartComponent } from './market/coin/main-chart/main-chart.component';
import { MarketTableComponent } from './market/coin-market/market-table/market-table.component';

const appRoutes: Routes = [
  {
    path: '', redirectTo: 'market', pathMatch: 'full'},
  { path: 'market', component: CoinMarketComponent },
  { path : 'coin', component : CoinComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CoinMarketComponent,
    CoinComponent,
    MainChartComponent,
    MarketTableComponent
  ],
  imports: [
    FlexLayoutModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    ChartModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
