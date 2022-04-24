import { myRandomData } from "./MyOther.server";
import { config } from "../config";

on("onResourceStart", (resName: string) => {
  if (resName === GetCurrentResourceName()) {
    config.started = true;
    console.log("TypeScript boilerplate started!");
    console.log(myRandomData);
    console.log(`${config.started} on server.`);
  }
});
