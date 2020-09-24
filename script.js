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
  if (event.target.tagName === 'TD') {
    const tdCell = event.target;
    if (tdCell.className.length) {
        tdCell.className = ''
    } else {
        tdCell.className = color;
        console.dir(tdCell)
    }
  }
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


