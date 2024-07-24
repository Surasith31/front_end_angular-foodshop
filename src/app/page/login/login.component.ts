import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Convert as Foodshop } from 'src/app/model/foodshop.model';
// import { User } from 'src/app/model/user.model';
import { DataService } from 'src/app/service/data.service';

import { Convert as UserCvt, User } from 'src/app/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  hide = true;
  foodshop = Array<Foodshop>();

  users = Array<User>();
  user:any;

  constructor(private router : Router , private http : HttpClient , private data : DataService){
  }

  checkLogin(email : any , password : any){
    if(email == '' && password == ''){
      alert('กรุณากรอกรหัสผ่าน');
    }
    let url = "http://localhost/api_food/login/" + email+"/"+password;
    // console.log(url);
    this.http.get(url).subscribe((data:any)=>{
      
      if(data[0] == 'a'){
        this.router.navigateByUrl('/admin');
      }
      else if(data[0] == 'c'){
        let url1 = "http://localhost/api_food/login/" + email;
        this.http.get(url1).subscribe((data:any)=>{
          this.users = UserCvt.toUser(JSON.stringify(data));

          this.user = this.users[0];
          this.data.user = this.user;
          this.router.navigateByUrl('/customer');
        });
      }
    });
  }
}
