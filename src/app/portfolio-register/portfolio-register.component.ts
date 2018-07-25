import { Component, OnInit } from '@angular/core';
import {ContractsService} from '../services/contracts.service';
@Component({
  selector: 'app-portfolio-register',
  templateUrl: './portfolio-register.component.html',
  styleUrls: ['./portfolio-register.component.css']
})
export class PortfolioRegisterComponent implements OnInit {
  public portregadd;
  private addres:any;
  private balance:any;
  constructor(private ds:ContractsService) { 
    ds.getAccounts().then(name=> this.addres= name);
    ds.getUserBalancee().then(namee=> this.balance= namee);
    this.ds.RegAdd().then(regadd => this.portregadd = regadd)
  }
  submit(){
    this.ds.PortReg(this.portregadd,this.etherdos).then(res => console.log(res))
}
    public etherdos:any;


  ngOnInit() {
  }

}
