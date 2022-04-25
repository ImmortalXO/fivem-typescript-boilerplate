import { myRandomData } from "./MyOther.server";
import Config from './config';

on("onResourceStart", (resName: string) => {
  if (resName === GetCurrentResourceName()) {
    Config.started = true;
    console.log("TypeScript boilerplate started!");
    console.log(myRandomData);
    console.log(`Started: ${Config.started} on server.`);
  }
});
