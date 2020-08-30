import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../services/simple.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(public simpleService: SimpleService) { }

  ngOnInit(): void {
  }

}
