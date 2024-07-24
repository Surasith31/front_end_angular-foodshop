//
//   import { Convert } from "./file";
//
//   const bill = Convert.toBill(json);

export interface Bill {
  id_bill:  number;
  id_cus:   number;
  date:     string;
  total:    number;
  status:   number;
  name:     string;
  email:    string;
  password: string;
  address:  string;
  phone:    number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toBill(json: string): Bill[] {
      return JSON.parse(json);
  }

  public static billToJson(value: Bill[]): string {
      return JSON.stringify(value);
  }
}
