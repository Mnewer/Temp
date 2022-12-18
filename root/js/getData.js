"use strict";

//get data from json file and return parsed data:
export async function getData() {
  const response = await fetch("data/transmitterData.json");
  const data = await response.text();
  return JSON.parse(data);
}
