import { BaseModel } from "sjs-base-model";

// SAMPLE API RESPONSE
// {
//    "sampleData": "sample",
//    "sampleDate": "18-08-2020"
// },

export default class SampleModel extends BaseModel {
  sampleData = "";
  sampleDate = new Date();

  constructor(data) {
    super();

    this.update(data);
  }
}
