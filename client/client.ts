import { myRandomData } from "./MyOther.client";
import Config from "../config";

on('onResourceStart', (resName: string) => {
  if (resName === GetCurrentResourceName()) {
    Config.started = true
    console.log(`Started: ${Config.started} on client.`);
    console.log(myRandomData)
    console.log('TypeScript boilerplate started!')
  }
})