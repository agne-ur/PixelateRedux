// Your code here
const addRow = document.getElementById("add-row");
const table = document.getElementsByTagName("table")[0];
const select = document.getElementsByTagName("select")[0];
let color = 'red';

function makeRow() {
  const row = document.createElement('tr')

  for (let i = 0; i < 15; i++) {
    const cell = document.createElement('td');
    row.appendChild(cell);
  }

  table.appendChild(row);
}

function colorize (event) {
  const tdCell = event.target;
  if (tdCell.className.length) {
      tdCell.className = ''
  } else {
      tdCell.className = color;
  }
}

select.addEventListener("change", function(event) {
  color = event.target.value;
})

addRow.addEventListener("click", function() {
  makeRow();
})

table.addEventListener('click', colorize )
