import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiEndpoint = 'http://localhost:80/api_food';

  user = new loginUser();
  basket = new basket();
  id_item : any;

  constructor() {

  }
}

//เก็บข้อมูลลูกค้า
class loginUser{
  id:       number = 0;
  id_cus:   number = 0;
  id_ad:    number = 0;
  name:     string = '';
  email:    string = '';
  password: string = '';
  address:  string = '';
  phone:    number = 0;
}

//เก็บค่าbill
class basket{
  id_item:  number = 0;
  id_bill:  number = 0;
  id_food:  number = 0;
  amount:   number = 0;
  id_cus:   number = 0;
  name:     string = '';
  email:    string = '';
  password: string = '';
  address:  string = '';
  phone:    string = '';
  price:    number = 0;
}

