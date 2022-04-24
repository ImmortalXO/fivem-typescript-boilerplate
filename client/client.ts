import { myRandomData } from "./MyOther.client";
import { config } from "../config";

on('onResourceStart', (resName: string) => {
  if (resName === GetCurrentResourceName()) {
    config.started = true
    console.log(`${config.started} on client.`);
    console.log(myRandomData)
    console.log('TypeScript boilerplate started!')
  }
})