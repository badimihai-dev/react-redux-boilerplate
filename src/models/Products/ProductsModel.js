import { BaseModel } from "sjs-base-model";

// SAMPLE API RESPONSE
// {
//    categories: {preparate pui: {…}, preparate vita: {…}, menus: {…}}
//    defaultCategory: "menus"
//    restaurantId: "VljSa5Eakepw9QkTAUOW"
//    restaurantTitle: "PAPAO"
// },

export default class RestaurantModel extends BaseModel {
  items = [];
  category = "";

  constructor(data) {
    super();

    this.update(data);
  }
}
