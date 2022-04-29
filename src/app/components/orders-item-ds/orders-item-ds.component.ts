import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-item-ds',
  templateUrl: './orders-item-ds.component.html',
  styleUrls: ['./orders-item-ds.component.css']
})
export class OrdersItemDSComponent implements OnInit {
  constructor() { }
  @Input() text?: string;
  @Input() id?: string;
  @Input() title?: string;
  @Input() image?: string;

  ngOnInit(): void {
  }

}
