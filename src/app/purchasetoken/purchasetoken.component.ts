// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-purchasetoken',
//   templateUrl: './purchasetoken.component.html',
//   styleUrls: ['./purchasetoken.component.css']
// })
// export class PurchasetokenComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit, OnDestroy } from '@angular/core';
import {ContractsService} from '../services/contracts.service';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import {Response} from '@angular/http'


import * as Web3 from 'web3';
declare let window: any;


@Component({
  selector: 'app-purchasetoken',
  templateUrl: './purchasetoken.component.html',
  styleUrls: ['./purchasetoken.component.css']
})
export class PurchasetokenComponent implements OnInit,OnDestroy{
  public AGL = "0x004be182e38b0572049417184fa8b0a65df0e35a";
    public BDS = "0x8f6f3fea8aa27e241a659589fea66a1739a7fac4";
    public CDS = "0xb9f1ea775196b5a2052f782a0ebcfc035573431b";
    public DTX = "0xb390c172f12aea412d5b7b2fe047bbdd6bab93a9";
    public BNB = "0x6e14b1c8df6aa206bee29a3fb1b36e5ab6bfaf0c";
    public OMG = "0x77acd3a68800e0ff50e08749283889e409dae404";
    public ZIL = "0x199b4324067b6fe0a0f7ef8981e5947e9fb8d6d5";
    public AE = "0x21ea399791222816a0d599d4b1896ec948977506";
    public WTC = "0x8711fefbac36fed9f17bb6b13c6ab23ba393c743";
    public BTM = "0x5272358e896a7e4022afe01c511f493759e3759a";
    take:"";
    price:any="";
    public result:any="";
    public result1:any="";
    public result2:any="";
    public result3:any="";
    public result4:any="";
    public result5:any="";
    public result6:any="";
    public result7:any="";
    public result8:any="";
    public result9:any="";
    public result10:any="";
    //input
    public agltxt:any="";
    public bdstxt:any="";
    public cdstxt:any="";
    public dostxt:any="";
    public bintxt:any="";
    public omgtxt:any="";
    public ziltxt:any="";
    public atertxt:any="";
    public wtctxt:any="";
    public btmtxt:any="";
    public addres:any;
    public balance:any;
    public account;
    public id1;
    public id2;
    public  _web3: any;
    public inputValue=this.result;
    public id3;
     
    public change1:any="";
    public change2:any="";
    public change3:any="";
    public change4:any="";
    public change5:any="";
    public change6:any="";
    public change7:any="";
    public change8:any="";
    public change9:any="";
    public change10:any="";
    public change11:any="";
  
    
     
    constructor(private SX:ContractsService,private route:Router,private http: HttpClient) {
        SX.getAccounts().then(name=> this.addres= name);
        SX.getUserBalancee().then(namee=> this.balance= namee);
        
    }
    table()
    {
      this.http.get('https://api.coinmarketcap.com/v2/ticker/2269/')
      .subscribe(
        (res:Response)=>{
         this.price=res;
        this.result=this.price.data.quotes.USD.price;
        this.change1=this.price.data.quotes.USD.percent_change_1h;
          // console.log(this.price.data.quotes.USD.price);
         
        }
      )
      
      this.http.get('https://api.coinmarketcap.com/v2/ticker/2246/')
      .subscribe(
        (res:Response)=>{
         this.price=res;
        this.result1=this.price.data.quotes.USD.price;
        this.change2=this.price.data.quotes.USD.percent_change_1h;
          // console.log(this.price.data.quotes.USD.price);
         
        }
      )
      
      this.http.get('https://api.coinmarketcap.com/v2/ticker/1320/')
      .subscribe(
        (res:Response)=>{
         this.price=res;
        this.result2=this.price.data.quotes.USD.price;
        this.change3=this.price.data.quotes.USD.percent_change_1h;
          // console.log(this.price.data.quotes.USD.price);
         
        }
      )
      
      this.http.get('https://api.coinmarketcap.com/v2/ticker/2299/')
      .subscribe(
        (res:Response)=>{
         this.price=res;
        this.result3=this.price.data.quotes.USD.price;
        this.change4=this.price.data.quotes.USD.percent_change_1h;
          // console.log(this.price.data.quotes.USD.price);
         
        }
      )
      
      this.http.get('https://api.coinmarketcap.com/v2/ticker/2496/')
      .subscribe(
        (res:Response)=>{
         this.price=res;
        this.result4=this.price.data.quotes.USD.price;
        this.change5=this.price.data.quotes.USD.percent_change_1h;
          // console.log(this.price.data.quotes.USD.price);
         
        }
      )
      
      this.http.get('https://api.coinmarketcap.com/v2/ticker/2588/')
      .subscribe(
        (res:Response)=>{
         this.price=res;
        this.result5=this.price.data.quotes.USD.price;
        this.change6=this.price.data.quotes.USD.percent_change_1h;
          // console.log(this.price.data.quotes.USD.price);
         
        }
      )
      
      this.http.get('https://api.coinmarketcap.com/v2/ticker/1876/')
      .subscribe(
        (res:Response)=>{
         this.price=res;
        this.result6=this.price.data.quotes.USD.price;
        this.change7=this.price.data.quotes.USD.percent_change_1h;
          // console.log(this.price.data.quotes.USD.price);
         
        }
      )
      
      this.http.get('https://api.coinmarketcap.com/v2/ticker/291/')
      .subscribe(
        (res:Response)=>{
         this.price=res;
        this.result7=this.price.data.quotes.USD.price;
        this.change8=this.price.data.quotes.USD.percent_change_1h;
          // console.log(this.price.data.quotes.USD.price);
         
        }
      )
      
      this.http.get('https://api.coinmarketcap.com/v2/ticker/541/')
      .subscribe(
        (res:Response)=>{
         this.price=res;
        this.result8=this.price.data.quotes.USD.price;
        this.change9=this.price.data.quotes.USD.percent_change_1h;
          // console.log(this.price.data.quotes.USD.price);
         
        }
      )
      
      this.http.get('https://api.coinmarketcap.com/v2/ticker/2608/')
      .subscribe(
        (res:Response)=>{
         this.price=res;
        this.result9=this.price.data.quotes.USD.price;
        this.change10=this.price.data.quotes.USD.percent_change_1h;
           //console.log(this.price.data.quotes.USD.percent_change_1h);
         
        }
      )
      
      this.http.get('https://api.coinmarketcap.com/v2/ticker/2585/')
      .subscribe(
        (res:Response)=>{
         this.price=res;
        this.result10=this.price.data.quotes.USD.price;
        this.change11=this.price.data.quotes.USD.percent_change_1h;
          // console.log(this.price.data.quotes.USD.price);
         
        }
      )
    
    
      let meta = this;
      meta.SX.getAccount().then(acc => { 
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

    }

    ngOnInit() 
    {     
        let meta = this;
        meta.table();     
         meta.id2 = setInterval(function() {
          meta.table();
      }, 5000);
         }
         ngOnDestroy() {
             if (this.id1) { 
               clearInterval(this.id1);
             }
             if (this.id2) {
                 clearInterval(this.id2);
               }
               if (this.id3) {
                clearInterval(this.id3);
              }
    }
      
    

    AGLC(){
        this.SX.PurchaseTKN(this.AGL,this.agltxt,this._web3.toWei(this.result,"ether")).then(de => console.log(de));
        console.log(this.result)
}

BDSC(){
    this.SX.PurchaseTKN(this.BDS,this.bdstxt,this._web3.toWei(this.result1,"ether")).then(de => console.log(de));
}

CDSC(){
    this.SX.PurchaseTKN(this.CDS,this.cdstxt,this._web3.toWei(this.result2,"ether")).then(de => console.log(de));
}

DTXC(){
    this.SX.PurchaseTKN(this.DTX,this.dostxt,this._web3.toWei(this.result3,"ether")).then(de => console.log(de));
}

BNBC(){
    this.SX.PurchaseTKN(this.BNB,this.bintxt,this._web3.toWei(this.result4,"ether")).then(de => console.log(de));
}

OMGC(){
    this.SX.PurchaseTKN(this.OMG,this.omgtxt,this._web3.toWei(this.result5,"ether")).then(de => console.log(de));
}

ZILC(){
    this.SX.PurchaseTKN(this.ZIL,this.ziltxt,this._web3.toWei(this.result6,"ether")).then(de => console.log(de));
}

AEC(){
    this.SX.PurchaseTKN(this.AE,this.atertxt,this._web3.toWei(this.result7,"ether")).then(de => console.log(de));
}

WTCC(){
    this.SX.PurchaseTKN(this.WTC,this.wtctxt,this._web3.toWei(this.result8,"ether")).then(de => console.log(de));
}

BTMC(){
    this.SX.PurchaseTKN(this.BTM,this.btmtxt,this._web3.toWei(this.result9,"ether")).then(de => console.log(de));
}


}