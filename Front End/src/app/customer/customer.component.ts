import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  Customers : any;
  constructor(private http: HttpClient) {
    this.http.get('https://localhost:44317/api/Customers').subscribe(data => {
      this.Customers = data
      console.log(data);
    })
  }
  ngOnInit(): void {
  }

}
