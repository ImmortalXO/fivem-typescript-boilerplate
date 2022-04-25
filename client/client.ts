import { myRandomData } from "./MyOther.client";
import Config from "../config";

on('onResourceStart', (resName: string) => {
  if (resName === GetCurrentResourceName()) {
    console.log(myRandomData)
    console.log('TypeScript boilerplate started!')
  }
})
