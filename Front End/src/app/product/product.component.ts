import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Products : any;

  constructor(private http: HttpClient) {
    this.http.get('https://localhost:44376/api/Products').subscribe(data => {
      this.Products = data
      console.log(data);
    })
  }
  ngOnInit(): void {
  }


}
