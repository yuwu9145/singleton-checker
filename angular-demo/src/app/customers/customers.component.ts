import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../services/simple.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor(public simpleService: SimpleService) { }

  ngOnInit(): void {
  }

}
