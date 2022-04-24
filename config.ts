import * as CFX from "@nativewrappers/client";

const currentResourceName = GetCurrentResourceName();

export const config = JSON.parse(
  LoadResourceFile(currentResourceName, "config.json")
);
