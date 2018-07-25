// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-fundtoken',
//   templateUrl: './fundtoken.component.html',
//   styleUrls: ['./fundtoken.component.css']
// })
// export class FundtokenComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import {ContractsService} from '../services/contracts.service';
import { Router } from '@angular/router';

import * as Web3 from 'web3';
declare let window: any;
@Component({
  selector: 'app-fundtoken',
  templateUrl: './fundtoken.component.html',
  styleUrls: ['./fundtoken.component.css']
   })
export class FundtokenComponent  implements OnInit {
  public alerts: Array<any> = [];
  public sliders: Array<any> = [];
  public name:any;
  public symbol:any;
  public totalsupply:any;
  public decimal:any;
  public address:any;
  public addres:any;
  public balance:any;
  public ethervalue:any;
  public fundTcommission:any;
  public account;
  public id1;
  public id2;
  public  _web3: any;

  constructor(private cs:ContractsService, private route: Router) {
    cs.getAccounts().then(name=> this.addres= name);
    cs.getUserBalancee().then(namee=> this.balance= namee);
    cs.getFundname().then(name=> this.name= name);
 this.address=cs.get()
    cs.getFundsymbol().then(symbol=>this.symbol=symbol);
    cs.getFundtotalsupply().then(totalsupply=>this.totalsupply=totalsupply);
    cs.getFunddecimal().then(decimal=>this.decimal=decimal);
    cs.FundTEthV().then(ether => this.ethervalue = ether);
    cs.Fundcommision().then(comin => this.fundTcommission = comin)
    
    
  
   
    
}

ngOnInit() 
{ 
  
    let meta = this;
    meta.cs.getAccount().then(acc => { 
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
