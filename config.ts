import * as CFX from "@nativewrappers/client";

const currentResourceName = GetCurrentResourceName();

const Config = JSON.parse(
  LoadResourceFile(currentResourceName, "config.json")
);

export default Config;
