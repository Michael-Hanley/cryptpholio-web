import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'angular-highcharts';
import { AppComponent } from './app.component';
import { ThemeSwitchComponent } from './component/theme-switch/theme-switch.component';
import { CoinMarketComponent } from './market/coin-market/coin-market.component';
import { MarketTableComponent } from './market/coin-market/market-table/market-table.component';
import { CoinNewsComponent } from './market/coin/coin-news/coin-news.component';
import { CoinComponent } from './market/coin/coin.component';
import { MainChartComponent } from './market/coin/main-chart/main-chart.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'market', pathMatch: 'full' },
  { path: 'market', component: CoinMarketComponent },
  { path: 'coin', component: CoinComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CoinMarketComponent,
    CoinComponent,
    MainChartComponent,
    MarketTableComponent,
    ThemeSwitchComponent,
    CoinNewsComponent
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
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
