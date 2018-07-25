// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-metamask-error',
//   templateUrl: './metamask-error.component.html',
//   styleUrls: ['./metamask-error.component.css']
// })
// export class MetamaskErrorComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit, OnDestroy } from '@angular/core';
import {ContractsService  } from '../services/contracts.service';
import { Router } from '@angular/router';
declare let window: any;
import * as Web3 from 'web3';

@Component({
  selector: 'app-metamask-error',
  templateUrl: './metamask-error.component.html',
  styleUrls: ['./metamask-error.component.css']
})
export class MetamaskErrorComponent implements OnInit, OnDestroy {

  public  _web3: any;
  public id1: any;

  constructor(private wcs:ContractsService, private router: Router) {  }

  ngOnInit() {
    let meta = this;
    this.id1 = setInterval(function() {
      if (typeof window.web3 !== 'undefined') {
        meta._web3 = new Web3(window.web3.currentProvider);
        if (meta._web3.eth.accounts[0] !== undefined) {
          meta.router.navigate(['fundtoken']);
        }
      }
    }, 200);
  }

  ngOnDestroy() {
    if (this.id1) {
      clearInterval(this.id1);
    }
  }
}