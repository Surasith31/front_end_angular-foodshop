// To parse this data:
//
//   import { Convert } from "./file";
//
//   const user = Convert.toUser(json);

//ข้อมูลลูกค้า
export interface User {
  id_cus:   number;
  id_ad:    number;
  name:     string;
  email:    string;
  password: string;
  address:  null;
  phone:    null;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toUser(json: string): User[] {
      return JSON.parse(json);
  }

  public static userToJson(value: User[]): string {
      return JSON.stringify(value);
  }
}
