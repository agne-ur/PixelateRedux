// Your code here
const addRow = document.getElementById("add-row");
const table = document.getElementsByTagName("table")[0];

function makeRow() {
  const row = document.createElement('tr')

  for (let i = 0; i < 15; i++) {
    const cell = document.createElement('td');
    row.appendChild(cell);
  }

  table.appendChild(row);
}

addRow.addEventListener("click", function() {
  makeRow();
})

