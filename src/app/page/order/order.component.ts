import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Convert as foodshopCvt, Foodshop } from 'src/app/model/foodshop.model';
import { Convert as basketCvt, Basket } from 'src/app/model/basket.model';
import { DataService } from 'src/app/service/data.service';
import { MatDialog } from '@angular/material/dialog';
import { EditamountComponent } from '../editamount/editamount.component';
import { Convert as BillCvt,Bill } from 'src/app/model/bill.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent {
  foodshop = Array<Foodshop>();
  baskets = Array<Basket>();
  bill = Array<Bill>();

  user: any;
  billorder: any;
  sum_order : number = 0 ;
  time:any;

  constructor(private router : Router,private http : HttpClient,private data : DataService , private dialog : MatDialog){
    //ข้อมูลuser
    this.user = this.data.user;

    console.log(this.user);
    //โชว์ข้อมูลอาหารในตะกร้า
    let url = "http://localhost/api_food/foodshop";
    this.http.get(url).subscribe((data:any) =>{
      this.foodshop = foodshopCvt.toFoodshop(JSON.stringify(data));
    });

    //เรียกค่าในตะกร้ามาใหม่
    this.getBasket();
  }

  //ดึงตะกร้าเพื่อมาโชว์ว่า ในตะกร้าของลูกค้ามีอะไรบ้าง
  getBasket() {
    let url = "http://localhost/api_food/basket/"+this.data.user.id_cus;
    this.http.get(url).subscribe((data:any) =>{
      this.baskets = basketCvt.toBasket(JSON.stringify(data));
      console.log(this.baskets);
      //เรียกใช้ตอนรวมราคา
      this.sumorder();
    });
  }
  //ลบข้อมูลออกจากตะกร้า
  delete(id_item : number){
    if(confirm('ยืนยันการลบอาหาร')){
      let url = "http://localhost/api_food/basket/"+id_item+"/"+this.data.user.id_cus;
      this.http.delete(url).subscribe((data:any) =>{
        this.baskets = basketCvt.toBasket(JSON.stringify(data));
      this.getBasket();
    });
    }
  }

  //รวมราคาอาหาร
  sumorder(){
    this.sum_order = 0;
    this.baskets.forEach(element => {
      this.sum_order = this.sum_order + (element.price * element.amount);
    })
  }

  //เเก้ไขจำนวน
  edit(id_item : number){
    this.data.id_item = id_item;
    this.dialog.open(EditamountComponent,{
      width: '360px',
      height: '300px'
    }).afterClosed().subscribe(result => {
      this.getBasket();
    });
  }

  //สั่งซื้อ addเข้า bill
  pay(){

    if(confirm('ยืนยันการสั่งซื้อ')){

      this.time = new Date();
      //addเข้าbill
      let url = "http://localhost/api_food/bill/"+this.data.user.id_cus+"/"+this.time+"/"+this.sum_order+"/"+0;
        this.http.post(url,JSON).subscribe((data:any) =>{

          //โชว์bill ที่insert ลง
          let url2 = "http://localhost/api_food/bill/"+this.data.user.id_cus;
            this.http.get(url2).subscribe((data:any) =>{
              this.bill = BillCvt.toBill(JSON.stringify(data));
              // console.log(this.bill[this.bill.length-1]);

              // เเก้ไขค่าbill จาก null
              let url3 = "http://localhost/api_food/bill/"+this.bill[this.bill.length-1].id_bill+"/"+this.data.user.id_cus;
              this.http.put(url3,JSON).subscribe((data:any) =>{
                this.baskets = basketCvt.toBasket(JSON.stringify(data));
                this.showfoodshop();
                alert('สั่งซื้อสำเร็จ');
              });
          });
      });
    }
  }

  showhome(){
    this.router.navigateByUrl('');
  }
  showfoodshop(){
    this.router.navigateByUrl('/customer');
  }
  showstatus(){
    this.router.navigateByUrl('/status');
  }
}
