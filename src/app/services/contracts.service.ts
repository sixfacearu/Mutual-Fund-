//Mutual fund BALAVIGNESH & ARUMUGAM & KANNAN

import {Injectable, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import * as Web3 from 'web3';
import { NgxSpinnerService } from 'ngx-spinner';
//import { resolve } from 'dns';
import { reject } from 'q';
declare var jquery:any;
declare var $ :any;
declare let web3:any;
declare let require: any;
declare let window: any;
//import $ from "jquery";

let tokenAbi = require('./DMFContract.json');
let fundtokenabi = require('./fundtoken.json');


@Injectable()
export class ContractsService {
  private _account: string = null;
  private _web3: any;
  
  private _DmftokenContract: any;
  private _fundtokenContract:any;
  public _tokenContractAddress: string = "0x830fa56e13cfbe89a14a72d2287e7b5e5f026550";
private _fundtokenaddress:string="0xac7f028012c5414563c9793ca6fde814e7450e8f";
  constructor(private route:Router,private spinner: NgxSpinnerService) {
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this._web3 = new Web3(window.web3.currentProvider);

    console.log("connect the metamask succesfully")
    } else {
      console.warn(
        'Please use a dapp browser like mist or MetaMask plugin for chrome'
      );
    }
    this._web3.version.getNetwork((err, netId) => {
      switch (netId) {
        case "1":
          console.log('This is mainnet')
          break
        case "2":
          console.log('This is the deprecated Morden test network.')
          break
        case "3":
          console.log('This is the ropsten test network.')
          break
        case "4":
          console.log('This is the Rinkeby test network.')
          break
        case "42":
          console.log('This is the Kovan test network.')
          break
        default:
          console.log('This is an unknown network.')
      }
  })

    this._DmftokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
    this._fundtokenContract = this._web3.eth.contract(fundtokenabi).at(this._fundtokenaddress);
  }
 
  public async getAccount(): Promise<string> {
    if (this._account == null) {
      this._account = await new Promise((resolve, reject) => {
        this._web3.eth.getAccounts((err, accs) => {
          if (err != null) {
            alert('There was an error fetching your accounts.');
            this.route.navigate(['metamask']);
            return;
          }

          if (accs.length === 0) {
            this.route.navigate(['metamask']);

            // alert(
            //   'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
            // );
            return;
          }
          resolve(accs[0]);
        })
      }) as string;

      this._web3.eth.defaultAccount = this._account;
    }

    return Promise.resolve(this._account);
  }

  //global variable declration
  public etherdosx:any;


  public async getFundname(): Promise<number> {
    
    let address = await this.getAccount();

    return new Promise((resolve, reject) => {
      this._fundtokenContract.name(function (err, result) {
        if(err != null) {
          reject(err);
        }

        resolve(result);
        
      });
    }) as Promise<number>;
  }
  public async getAccounts(): Promise<string> {
    if (this._account == null) {
      this._account = await new Promise((resolve, reject) => {
        this._web3.eth.getAccounts((err, accs) => {
          if (err != null) {
            alert('There was an error fetching your accounts.');
            return;
          }
  
          if (accs.length === 0) {
            // alert(
            //   'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
            // );
            return;
          }
          resolve(accs[0]);
         // alert(accs[0]);            
              })
      }) as string;
  
      this._web3.eth.defaultAccount = this._account;
    }
    return Promise.resolve(this._account);
  }
  public async getUserBalancee(): Promise<number> {
    let account = await this.getAccount();  
    return await new Promise((resolve, reject) => {
      this._web3.eth.getBalance(account, (err, balance) => {
        balance = this._web3.fromWei(balance, "ether") + ""
        //alert(balance);F
        //return balance;
        resolve(balance);
      })  
    }) as Promise<number>;
  }
  public async getFundsymbol(): Promise<number> {
    
    let address = await this.getAccount();

    return new Promise((resolve, reject) => {
      this._fundtokenContract.symbol(function (err, result) {
        if(err != null) {
          reject(err);
        }

        resolve(result);
        
      });
    }) as Promise<number>;
  }
  
  public async getFundtotalsupply(): Promise<number> {
    
    let address = await this.getAccount();

    return new Promise((resolve, reject) => {
      this._fundtokenContract.totalSupply(function (err, result) {
        if(err != null) {
          reject(err);
        }

        resolve(result);
      
      });
    }) as Promise<number>;
  }
  
  public async getFunddecimal(): Promise<number> {
    
    let address = await this.getAccount();

    return new Promise((resolve, reject) => {
      this._fundtokenContract.decimals(function (err, result) {
        if(err != null) {
          reject(err);
        }

        resolve(result);
        
        
      });
    }) as Promise<number>;
  }
  get():any{
    return this._tokenContractAddress
  }
  

  //Functions for Portfoliomanager

 
  //Selling the tokens to portfoliomanager
  public async Selltoken(t:any,s:any){
    //let investadd = await this.getAccount()
    //let investadd = (document.getElementById("selladd") as HTMLInputElement).value;  
    //let amount_tok = (document.getElementById("sellcount") as HTMLInputElement).value;  

    return new Promise((resolve, reject) => {
      //this.spinner.show();
      this._DmftokenContract.ReturnTokenToPortfolioManager(t,s,function(err,result) 
     {
      
     if(result) {
    //  this.spinner.hide();
     }
     else
     {
      this.hash(result).then((res) =>
       {
         console.log("result : "+ res );  
         if (res == false)
       {}
         //this.spinner.hide();
       })
     }        
    
  });
  }) as Promise<number>;
  }


  //Check Available tokens in Investor account
  public investortoken:any;
  public async InvestAvaT(){
    let inv_or_port_add = await this.getAccount();
    //let investadd = (document.getElementById("selladd") as HTMLInputElement).value;  
    //let amount_tok = (document.getElementById("sellcount") as HTMLInputElement).value;  

    return new Promise((resolve, reject) => {
      this._DmftokenContract.getBalance(inv_or_port_add,function(err,result) 
     {
      
     if(result) {
     console.log(result);
     }
     else {
      reject(err);
     }
     resolve(result);
     });
     })
  }
  //showing the Investor address into the investor available token field
  public async Invesadd(){
    let inv_add = await this.getAccount();
    return inv_add;
    
  }




  //Showing the fundtoken ether value
  public async FundTEthV(){
    let inv_or_port_add = await this.getAccount()
    

    return new Promise((resolve, reject) => {
      this._DmftokenContract.GetBal(function(err,result) 
     {
      
     if(result) {
     console.log(result);
     }
     else {
      reject(err);
     }
     resolve(result);
     });
     })
  }



  //showing the fundtoken commision earned
  public async Fundcommision(){

     return new Promise((resolve, reject) => {
      this._DmftokenContract.takecommission(function(err,result) 
     {
      
     if(result) {
     console.log(result);
     }
     else {
      reject(err);
     }
     resolve(result);
     });
     })
  }

  //function for showing the portfolio commission

  public async PortComin(){
    let port_add:any = await this.getAccount()

    
    return new Promise((resolve, reject) => {
     this._DmftokenContract.Portfolio(port_add,function(err,result) 
    {
     
    if(result) {
    console.log(result);

    }
    else {
     reject(err);
    }
    resolve(result);
  
    
    });
    }) as Promise<number>;
 }


 //Portfolio manager registration

 public async PortReg(a:any,b:any):Promise<number> {
  //this.spinner.show();
   let address = await this.getAccount();
  
   //let ether_V = (document.getElementById("portether") as HTMLInputElement).value;  

   return new Promise((resolve, reject) => {
     this._DmftokenContract.PortfolioReg({from:a,gas: 600000,value: this._web3.toWei(b, 'ether')},function (err, result) {
      {  
        if(err) 
        {
          reject(err);
        }
        else if(result == true) 
         {
          // this.spinner.hide();
         }
         else
         {
          this.hash(result).then((res) =>
           {
             console.log("result : "+ res );  
             if (res == false)
             {}
             //this.spinner.hide();
           })
         }        
        } 
      });
      }) as Promise<number>;
      }


   //Showing the portfoliomanager availbale token value
   public async PortfolioMAVT(){
    let port_add = await this.getAccount();
    (document.getElementById("portaddu") as HTMLInputElement).value = port_add;
    return new Promise((resolve, reject) => {
      this._DmftokenContract.getBalance(port_add,function(err,result) 
     {
      
     if(result) {
     console.log(result);
     }
     else {
      reject(err);
     }
     resolve(result);
     });
     })
  }

//showing the portfolio address to the reg page

public async RegAdd(){
  let port_add = await this.getAccount();
  return port_add;
  
}


//spliting the dividends amount
public async Dividend() {
  let account = await this.getAccount();
  let meta=this.spinner
 //meta.show();
   return new Promise((resolve, reject) => {
  this._DmftokenContract.Dividends(function(err,result) //purchase token
 {
  //this.spinner.show();
 if(result) 
 {
  //meta.hide();
 }
 else 
 {
  {
    this.hash(result).then((res) =>
     {
       console.log("result : "+ res );  
       if (res == false)
        {}
       //meta.hide();
     })
    }
  }       
  });
})
}


 //Investor registration
 public async InvestorReg(x:any,y:any) {
  // this.spinner.show()
 // let Inve_add = await this.getAccount();
  //let port_add = (document.getElementById("posadd") as HTMLInputElement).value;
  //let ether_V = (document.getElementById("investeth") as HTMLInputElement).value;
   return new Promise((resolve, reject) => {
  this._DmftokenContract.InvesterGetToken(x,{gas: 600000,value: this._web3.toWei(y,'ether')},function(err,result) 
 {
  
 if(result) {
 //this.spinner.hide()
 }
 else 
 {
  {
    this.hash(result).then((res) =>
     {
       console.log("result : "+ res );  
       if (res == false)
   {}
       //this.spinner.hide();
     })
    }
  }       
  });
})
}

 //function for portfolio list
// public async bank_list() {
//   let meta = this;
  
//   let account:string;
//   await this.getAccount().then(address => this._account = address);
//   let myarray:number[];
//   let j=1;
//   let just:any;
//   //console.log("yes");
  
//   console.log(this._account);
 
  
  
//          return meta._DmftokenContract.values(function(error,val)
//         {
//           //console.log();
          
    
//           for(let i=0;i<=val[0].toNumber();i++)
//           { 
//              meta._DmftokenContract.ToatlportfolioMAddress(i,function (error,result) {
               
//              just = result;
//             meta._DmftokenContract.getBalance(result,function(er,res){
              
//                meta._DmftokenContract.Portfolio(result,function(errr,fi){
                 
                
//                   $("#body_bank").append('<tr><td>'+ j++ +'</td><td>'+result+'</td><td>'+fi[0]+'</td><td>'+res+'</td><td></tr>')
//                })
//               })             
//                });
//             }
//    });
//   }
  
// //function for List of investor table function
// public async InvestorList() {
//   let meta = this;
  
//   let account:string;
//   await this.getAccount().then(address => this._account = address);
//   let myarray:number[];
//   let j=1;
//   //console.log("yes");
  
//   console.log(this._account);
 
  
  
//          return meta._DmftokenContract.values(function(error,val)
//         {
          
          
    
//           for(let i=0;i<=val[1].toNumber();i++)
//           { 
//              meta._DmftokenContract.TotalInvestorAddress(i,function (error,result) {
               
             
//             meta._DmftokenContract.getBalance(result,function(er,res){
              
//                meta._DmftokenContract.Investment(result,function(errr,fi){

//                   $("#inves_list").append('<tr><td>'+ j++ +'</td><td>'+result+'</td><td>'+fi[1]+'</td><td>'+res+'</td></tr>')
//                })
//               })             
//                });
//             }
//    });
//   }



//Function For purchase token
public async PurchaseTKN(x:any,y:any,Z:any) {
  //this.spinner.show();
   let Inve_add = await this.getAccount();
   
    return new Promise((resolve, reject) => {
   this._DmftokenContract.purchaseToken(x,y,Z,function(err,result) 
  {
   
  if(result) {
    //this.spinner.hide();
  }
  else 
  {
   {
     this.hash(result).then((res) =>
      {
        console.log("result : "+ res );  
        if (res == false)
    {}
        //this.spinner.hide();
      })
     }
   }       
   });
 })
 }

  public async values():Promise<number[]>  {
   
    return new Promise((resolve, reject) => {
       this._DmftokenContract.values(function(err,result) 
      {
        
        if(err){    
          reject(err); 
        }
        //console.log(result);
        
  
        const arr:number[] = [];
        for(var i=0;i<=result.toNumber();i++){
            arr.push(i);
        } 
  
          resolve(arr);
        
      })
    })as Promise<number[]>;
   
      
   }
   public async values1():Promise<number[]>  {
   
    return new Promise((resolve, reject) => {
       this._DmftokenContract.values1(function(err,result) 
      {
        
        if(err){    
          reject(err); 
        }
        //console.log(result);
        
  
        const arr:number[] = [];
        for(var i=0;i<=result.toNumber();i++){
            arr.push(i);
        } 
  
          resolve(arr);
        
      })
    })as Promise<number[]>;
   
      
   }
   public async getBalance(b):Promise<number> {
     
       
    return new Promise((resolve, reject) => {
      this._DmftokenContract.getBalance(b,function(err,result) 
      {
      
        if(err){    
          reject(err); 
        }      
        resolve(result);
  
      });
    })as Promise<number>;
  }
  
  public async ToatlportfolioMAddress(s):Promise<string> {
       
      return new Promise((resolve, reject) => {
      this._DmftokenContract.ToatlportfolioMAddress(s,function(err,result) 
      {
      
        if(err){    
          reject(err); 
        } 
          
          resolve(result);
  
      });
  })as Promise<string>;
  
   }

   //getting the investor address
  public async TotalInvestorAddress(a):Promise<string> {
       
    return new Promise((resolve, reject) => {
    this._DmftokenContract.TotalInvestorAddress(a,function(err,result) 
    {
    
      if(err){    
        reject(err); 
      } 
        
        resolve(result);
  
    });
  })as Promise<string>;
  
  
  
  
  }
  public async PortfolioList(a,b):Promise<string> {
       
    return new Promise((resolve, reject) => {
    this._DmftokenContract.PortfolioList(a,function(err,result) 
    {
    
      if(err){    
        reject(err); 
      } 
        
        resolve(result);
  
    });
  })as Promise<string>;
  
  
  
  
  }
  public async invester(a,b):Promise<string> {
    
    return new Promise((resolve, reject) => {
    this._DmftokenContract.invester(a,b,function(err,result) 
    {
    
      if(err){    
        reject(err); 
      } 
        
        resolve(result);
  
    });
  })as Promise<string>;
  
  
  
  
  }
  public async portfoliocount(a):Promise<string> {
    
    return new Promise((resolve, reject) => {
    this._DmftokenContract.invester(a,function(err,result) 
    {
    
      if(err){    
        reject(err); 
      } 
        
        resolve(result);
  
    });
  })as Promise<string>;
  
  
  
  
  }

  
  public async Investment(c):Promise<object> {
     
       
    return new Promise((resolve, reject) => {
        this._DmftokenContract.Investment(c,function(err,result) 
        {
        
          if(err){    
            reject(err); 
          }
        resolve(result);
       });
    })as Promise<object>;
  }

 //function for getting the portfolio ethervalues

 public async PortfolioEther(c):Promise<object> {
     
       
  return new Promise((resolve, reject) => {
      this._DmftokenContract.Portfolio(c,function(err,result) 
      {
      
        if(err){    
          reject(err); 
        }
      resolve(result);
     });
  })as Promise<object>;
}



//Function for getting the investor investment ether
public async InvestorEther(c):Promise<object> {
     
       
  return new Promise((resolve, reject) => {
      this._DmftokenContract.Investment(c,function(err,result) 
      {
      
        if(err){    
          reject(err); 
        }
      resolve(result);
     });
  })as Promise<object>;
}


public async PortfolioValidating():Promise<boolean> {
 
  let account:string ='';
  await this.getAccount().then(address => this._account = address);
    
  return new Promise((resolve, reject) => {
      this._DmftokenContract.PortfolioValidating(this._account,function(err,result)
      {
      
        if(err){    
          reject(err);
        }
      
      resolve(result);
     
    
    
     });
  })as Promise<boolean>;
 }
 public async hash(a): Promise<boolean> {
  let meta = this;
  return new Promise((resolve, reject) => {

    var accountInterval = setInterval(function()
    {
      meta._web3.eth.getTransactionReceipt(a,function(err,result){
        if(err != null) {
        reject(err);
        }

        if(result !== null)
        {
          clearInterval(accountInterval);
          if(result.status == 0x1)
          {
            resolve(true);
          }
          else
          {           
            resolve(false);
          }
        }
      })
    },100)
  }) as Promise<boolean>;
}



}




