"use strict";
import { getData } from "./getData.js";
import { editRow } from "./edit.js";

const tableData = await getData();
const table = document.querySelector("#transmitterTable tbody");

function generateTable(table, data) {
  //iterate over dataset key value pairs and make a row for block
  for (const element of data) {
    const row = table.insertRow();
    //iterate over every item inside the object and make a new cell for each value
    for (const key in element) {
      const cell = row.insertCell();
      const text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
    const cell = row.insertCell();
    const btn = document.createElement("button");
    btn.innerText = "Edit";
    btn.id = "editBtn";
    btn.className = "btn btn-success";
    cell.appendChild(btn);
  }
}

generateTable(table, tableData);

const editBtn = document.querySelectorAll('#editBtn')
editBtn.forEach((btn) => {
  btn.addEventListener('click', editRow)
})

// editRow();
