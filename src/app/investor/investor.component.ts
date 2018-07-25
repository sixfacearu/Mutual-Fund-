// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-investor',
//   templateUrl: './investor.component.html',
//   styleUrls: ['./investor.component.css']
// })
// export class InvestorComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import {ContractsService} from '../services/contracts.service';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import * as Web3 from 'web3';
declare let window: any;

@Component({
     selector: 'app-investor',
     templateUrl: './investor.component.html',
    styleUrls: ['./investor.component.css']
   })
  
  

export class InvestorComponent implements OnInit {
    
  
  public ines_or_reg_AT:any;
  private addres:any;
  private balance:any;
  public sliders: Array<any> = [];
  public account;
  public id1;
  public id2;
  public  _web3: any;
  public slider: Array<any> = [];
 
  constructor(private JX: ContractsService,private route:Router) {
    
    JX.getAccounts().then(name=> this.addres= name);
    JX.getUserBalancee().then(namee=> this.balance= namee);
      JX.InvestAvaT().then(tokens => this.ines_or_reg_AT = tokens);
      this.JX.Invesadd().then(inadd => this.inestoradd = inadd);
      this.JX.InvestAvaT().then(investK => this.investortok = investK);
     
  }


  ngOnInit() {
    this.JX.values().then(result => {
        result.forEach(item=>{
            let arr = {};
          
            this.JX.ToatlportfolioMAddress(item).then(fi => {
               
                  
                arr["id"] = item;
                arr["address"] = fi;
                return fi;
            }).then(fix =>{
  
                 this.JX.PortfolioEther(fix).then(eth => {
                     arr["eth"] = eth[0];
                })
                 this.JX.getBalance(fix).then(bal =>{
                    arr["bal"] = bal;
                 
                     
                      
                    this.slider.push(arr)
                 
                  
                });
                
            });
        });
  
           
            })
    let meta = this;
    meta.JX.getAccount().then(acc => { 
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


  

  public portaddd:any;
  public ether_V:any;
  public token_V:any=0;
  public portadx:any;
  public tokencox:any;
  public investortok: any;
  public inestoradd:any;



  onSubmit()
  {
      this.JX.Selltoken(this.portadx,this.tokencox).then(res => console.log(res))
  }

//checked
  submit(){
      this.JX.InvestorReg(this.portaddd,this.ether_V).then(de => console.log(de));

  }

  

  JSubmit()
  {
      this.JX.Selltoken(this.portadx,this.tokencox).then(res => console.log(res))
  }
}

