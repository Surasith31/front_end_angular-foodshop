// To parse this data:
//
//   import { Convert } from "./file";
//
//   const foodshop = Convert.toFoodshop(json);

export interface Foodshop {
  id_food: number;
  name:    string;
  price:   number;
  type:    string;
  image:   string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toFoodshop(json: string): Foodshop[] {
      return JSON.parse(json);
  }

  public static foodshopToJson(value: Foodshop[]): string {
      return JSON.stringify(value);
  }
}
