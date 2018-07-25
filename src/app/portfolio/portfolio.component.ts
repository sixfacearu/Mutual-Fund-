// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-portfolio',
//   templateUrl: './portfolio.component.html',
//   styleUrls: ['./portfolio.component.css']
// })
// export class PortfolioComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContractsService } from '../services/contracts.service';

import * as Web3 from 'web3';
declare let window: any;

@Component({
    selector: 'app-portfolio',
     templateUrl: './portfolio.component.html',
     styleUrls: ['./portfolio.component.css']
  })
export class  PortfolioComponent implements OnInit {
  public sliders: Array<any> = [];
  public portcommission:any;
  private addres:any;
  private balance:any;
  public portavailaTK:any;
  public account;
public id1;
public id2;
public  _web3: any;
constructor(private HS:ContractsService,private route:Router) { 
  HS.getAccounts().then(name=> this.addres= name);
  HS.getUserBalancee().then(namee=> this.balance= namee);
  HS.PortComin().then(pcomin => this.portcommission = pcomin)
      HS.PortfolioMAVT().then(portava => this.portavailaTK = portava)
  }

  ngOnInit() 
    { 
      
        let meta = this;
        meta.HS.getAccount().then(acc => { 
            this.account = acc;
            meta.id1 = setInterval(function() {
             if (typeof window.Web3 !== 'undefined') {
                 meta._web3 = new Web3(window.web3.currentProvider);
                 if (meta._web3.eth.accounts[0] !== meta.account) {
                     meta.account = meta._web3.eth.accounts[0];
                     if (meta._web3.eth.accounts[0] === undefined) {
                         meta.route.navigate(['metamask']);
                         clearInterval(this.interval);
                     } else {
                         window.location.reload(true);
                        //  alert('Address Change Detected Please Refresh Page');
                     }
                 }
             } else {
                 meta.route.navigate(['metamask']);
             }
            }, 200);
         });
  
         meta.id2 = setInterval(function() {
  
      }, 20000);
         
    }
    ngOnDestroy() {
      if (this.id1) {
        clearInterval(this.id1);
      }
      if (this.id2) {
          clearInterval(this.id2);
        }
    }
  }
