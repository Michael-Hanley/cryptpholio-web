import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoinService } from './services/coin-service.service';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoinMarketComponent } from './market/coin-market/coin-market.component';
import { CoinComponent } from './market/coin/coin.component';

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
    CoinComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
