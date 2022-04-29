import { Component, OnInit } from '@angular/core';
import { DSDataService } from 'src/app/services/ds-data.service';

@Component({
  selector: 'app-orders-ds',
  templateUrl: './orders-ds.component.html',
  styleUrls: ['./orders-ds.component.css']
})
export class OrdersDSComponent implements OnInit {

  constructor(private service: DSDataService) { }
  public items$ :any;
  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
   this.service.getAll().subscribe(response=>{
    this.items$ = response;
   })
  }
  getOneById(id:string){
    this.service.getOneById(id).subscribe(response=>{
      this.items$ = response;
     })}
  
}
