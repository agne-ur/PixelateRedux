// Your code here
const addRow = document.getElementById("add-row");
const table = document.getElementsByTagName("table")[0];
const select = document.getElementsByTagName("select")[0];
const clear = document.getElementById("clear");
let color = 'red';

function makeRow() {
  const row = document.createElement('tr')

  for (let i = 0; i < 15; i++) {
    const cell = document.createElement('td');
    cell.setAttribute('class', 'default')
    row.appendChild(cell);
  }

  table.appendChild(row);
}

function colorize (event) {
  if (event.target.tagName === 'TD') {
    const tdCell = event.target;
    if (tdCell.className !== 'default') {
        tdCell.className = 'default'
    } else {
        tdCell.className = color;
        console.dir(tdCell)
    }
  }
}

function clearPalette() {
  const rows = Array.from(table.childNodes)
  rows.forEach(row => {
    const cells = Array.from(row.childNodes)
    cells.forEach(cell => {
      cell.className = 'default';
    })
  })
}

select.addEventListener("change", function(event) {
  color = event.target.value;
})


addRow.addEventListener("click", function() {
  makeRow();
})

table.addEventListener('mouseup', function() {
    table.removeEventListener('mouseover', colorize )
})

table.addEventListener('mousedown', function() {
    table.addEventListener('mouseover', colorize )
})

//table.addEventListener('mousemove', colorize )

table.addEventListener('click', colorize )

clear.addEventListener('click', clearPalette)
