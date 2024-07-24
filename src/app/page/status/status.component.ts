import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Convert as BillCvt,Bill } from 'src/app/model/bill.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  bill = Array<Bill>();

  constructor(private router : Router , private data : DataService , private http : HttpClient){

    let url = "http://localhost/api_food/bill/"+this.data.user.id_cus;
    this.http.get(url).subscribe((data:any) =>{
      this.bill = BillCvt.toBill(JSON.stringify(data));
      console.log(this.bill);

      console.log(this.bill);
    });

  }
  
  backcustomer(){
    this.router.navigateByUrl('/customer');
  }
  backorder(){
    this.router.navigateByUrl('/order')
  }
}
