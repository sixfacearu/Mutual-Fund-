import { Component, OnInit  } from '@angular/core';
import * as Web3 from 'web3';
import { Router } from '@angular/router';
declare  let window:any;
import { ContractsService } from '../services/contracts.service';
@Component({
  selector: 'app-investorlist',
  templateUrl: './investorlist.component.html',
  styleUrls: ['./investorlist.component.css']
})
export class InvestorlistComponent implements OnInit{
    public slider: Array<any> = [];
    public result:any;
    public fi:any;
    public j:number=1;
    public res:any;
    public a:any
    public b:any
    public c:any
    public d:any
    private addres:any;
  private balance:any;
  private account:any;
  public id1;
  public id2;
  
  public  _web3: any;
 

    constructor(private JX:ContractsService,  private route:Router) {
        JX.getAccounts().then(name=> this.addres= name);
        JX.getUserBalancee().then(namee=> this.balance= namee);
     
    }
  

  ngOnInit() {
    this.JX.values1().then(result => {
        result.forEach(item=>{
            let arr = {};
          
            this.JX.TotalInvestorAddress(item).then(fi => {
               
                  
                arr["id"] = item;
                arr["address"] = fi;
                return fi;
            }).then(fix =>{
  
                 this.JX.Investment(fix).then(eth => {
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
      

