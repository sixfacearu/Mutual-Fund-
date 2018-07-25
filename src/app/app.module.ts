import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContractsService} from './services/contracts.service';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { NgxSpinnerModule } from 'ngx-spinner';


import { FormsModule } from '@angular/forms';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { InvestorComponent } from './investor/investor.component';
import { FundtokenComponent } from './fundtoken/fundtoken.component';
import { PortfoliolistComponent } from './portfoliolist/portfoliolist.component';
import { InvestorlistComponent } from './investorlist/investorlist.component';
import { PurchasetokenComponent } from './purchasetoken/purchasetoken.component';
import { MetamaskErrorComponent } from './metamask-error/metamask-error.component';
import {HttpClientModule} from '@angular/common/http';
import { PortfolioCheckGuard  } from './guard/portfolio-check.guard';
import { PortfolioRegisterComponent } from './portfolio-register/portfolio-register.component';

const appRoutes: Routes = [
  { path: 'fundtoken', component:  FundtokenComponent },
  { path: 'portfolio', component:PortfolioComponent,canActivate : [PortfolioCheckGuard]},
  { 
    path: 'portfolio-register',
    component:PortfolioRegisterComponent
 
  },
  { path: 'investor', component: InvestorComponent},
  { path: 'portfoliolist', component:  PortfoliolistComponent },
  { path: 'investorlist', component: InvestorlistComponent},
  { path: 'purchasetoken', component: PurchasetokenComponent,},
  {  path: 'metamask',component: MetamaskErrorComponent },
     { 
    path: '',
    redirectTo: '/fundtoken',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,

    PortfolioRegisterComponent,
    
    PortfolioComponent,
    InvestorComponent,
    FundtokenComponent,
    PortfoliolistComponent,
    InvestorlistComponent,
    PurchasetokenComponent,
    MetamaskErrorComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    NgxSpinnerModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [ContractsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
