import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductsModel } from './products.model';
import { WaitingproductsService } from '../waitingproducts.service';

@Component({
  selector: 'app-validateproducts',
  templateUrl: './validateproducts.component.html',
  styleUrls: ['./validateproducts.component.css']
})
export class ValidateproductsComponent implements OnInit {
  httpdata;
  products:ProductsModel[]=[];

  constructor(public http:HttpClient, private router:Router, private waiting:WaitingproductsService) { }

  ngOnInit(): void {
    this.waiting.getProducts().subscribe(data => {
      this.products=JSON.parse(JSON.stringify(data));

    })

  }

}
