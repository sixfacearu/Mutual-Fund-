import { Component, OnInit ,OnDestroy} from '@angular/core';
import * as Web3 from 'web3';
import { Router } from '@angular/router';
declare  let window:any;
import { ContractsService } from '../services/contracts.service';
import { RouterLink } from '@angular/router';





@Component({
  selector: 'app-portfoliolist',
  templateUrl: './portfoliolist.component.html',
  styleUrls: ['./portfoliolist.component.css']
})
export class PortfoliolistComponent implements OnInit {
  public slider: Array<any> = [];
  public  _web3: any;
public id1:any
public id2:any;
private addres:any;
private balance:any;
public account: string = null;

constructor(private JX: ContractsService,private route:Router) {
  JX.getAccounts().then(name=> this.addres= name);
  JX.getUserBalancee().then(namee=> this.balance= namee);
  if (typeof window.web3 !== 'undefined') {
    this._web3 = new Web3(window.web3.currentProvider);      
  }
    
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



}