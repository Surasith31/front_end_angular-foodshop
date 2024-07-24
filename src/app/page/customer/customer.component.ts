import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Convert as foodshopCvt, Foodshop } from 'src/app/model/foodshop.model';
import { Convert as typeCvt, Type} from 'src/app/model/type.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  type = Array<Type>();
  foodshop = Array<Foodshop>();
  user: any;

  constructor(private router : Router,private http : HttpClient,private data : DataService){
    this.user = this.data.user;
    console.log(this.user);
    //โชว์ประเภทอาหาร
    let url = "http://localhost/api_food/foodshop/type";
    this.http.get(url).subscribe((data:any) =>{
      this.type = typeCvt.toType(JSON.stringify(data));
    });
  }

  gettypefood(t : any){
    // console.log(this.type[t.index].type);
    let url = "http://localhost/api_food/foodshop/type/"+this.type[t.index].type;
    this.http.get(url).subscribe((data:any) =>{
      this.foodshop = foodshopCvt.toFoodshop(JSON.stringify(data));
      // console.log(this.foodshop);
    });
  }

  //เพิ่มข้อมูลลงตะกร้า
  add(id : number){
    console.log(id);
    let url = "http://localhost/api_food/basket/"+id+'/'+1+'/'+this.user.id_cus;
    this.http.post(url,JSON).subscribe((data:any) =>{

    });
  }

  showlogin(){
    this.router.navigateByUrl('');
  }
  showorder(){
    this.router.navigateByUrl('/order');
  }
  showstatus(){
    this.router.navigateByUrl('/status');
  }
}
