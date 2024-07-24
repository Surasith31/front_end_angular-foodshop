import { DialogRef } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Convert as basketCvt, Basket } from 'src/app/model/basket.model';

@Component({
  selector: 'app-editamount',
  templateUrl: './editamount.component.html',
  styleUrls: ['./editamount.component.scss']
})
export class EditamountComponent {

  public value : number = 1;
  baskets = Array<Basket>();
  selectedFood:any;
  user: any;

  constructor(private router : Router,private data:DataService , private http : HttpClient , private dialogRef : DialogRef){
    this.user = this.baskets;
  }
  //ยืนยันเเก้ไขจำนวน
  confirm(){
    this.user = this.data.user;
    let url = "http://localhost/api_food/basket/"+this.data.id_item+"/"+this.value+"/"+this.user.id_cus;
    this.http.put(url,JSON).subscribe((data:any) =>{
      this.baskets = basketCvt.toBasket(JSON.stringify(data));
      this.dialogRef.close();
    });
    
  }

  close(){
    this.dialogRef.close();
  }

  //กดเเพิ่มเเละลบ จำนวน
  public counter(str:string){
    if(str=='plus'){
      this.value++
    }
    else if(this.value>1){
      this.value--
    }
  }
}
