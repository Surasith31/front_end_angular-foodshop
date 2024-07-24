// To parse this data:
//
//   import { Convert } from "./file";
//
//   const basket = Convert.toBasket(json);

//ลูกค้าคนนี้มีสินค้าอะไรบ้าง
export interface Basket {
  id_item:  number;
  id_bill:  null;
  id_food:  number;
  amount:   number;
  id_cus:   number;
  name:     string;
  email:    string;
  password: string;
  address:  null;
  phone:    null;
  price:    number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toBasket(json: string): Basket[] {
      return JSON.parse(json);
  }

  public static basketToJson(value: Basket[]): string {
      return JSON.stringify(value);
  }
}
