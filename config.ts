import * as CFX from "@nativewrappers/client";
import Cfg from './typings'

const currentResourceName = GetCurrentResourceName();

const Config: Cfg = JSON.parse(
  LoadResourceFile(currentResourceName, "config.json")
);

export default Config;
