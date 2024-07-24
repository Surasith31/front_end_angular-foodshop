import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Convert as BillCvt,Bill } from 'src/app/model/bill.model';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  bill = Array<Bill>();

  constructor(private router : Router , private data : DataService , private http : HttpClient){

    let url = "http://localhost/api_food/bill";
    this.http.get(url).subscribe((data:any) =>{
      this.bill = BillCvt.toBill(JSON.stringify(data));
      console.log(this.bill);

      console.log(this.bill);
    });
  }
  //ปรับสถานะลูกค้า 0 ยังไม่จัดส่ง 1 จัดส่งเเล้ว
  status(id_bill:number,id_cus:number,n:any){
    if(confirm('ยืนยันการปรับสถานะ')){
      let url = "http://localhost/api_food/status/"+id_bill+"/"+id_cus+"/"+n;
        this.http.put(url,JSON).subscribe((data:any) =>{
        this.bill = BillCvt.toBill(JSON.stringify(data));
      });
    }
  }

  logout(){
    this.router.navigateByUrl('');
  }
}
