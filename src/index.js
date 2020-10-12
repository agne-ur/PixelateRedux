// Your code here
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

render(
  <App />,
  document.getElementById('app')
)









// let color = 'red';
// let columns = 7;

// const state = {
//   color: 'red',
//   columns: 7
// }

// // Pass the parent node in as an argument and append a new cell right onto it
// function makeCell(parent) {
//   const cell = document.createElement('td');
//     cell.setAttribute('class', 'default')
//     parent.appendChild(cell);
// }

// // Invoke makeCell inside of for loop, and then appends the new row onto table
// function makeRow() {
//   const row = document.createElement('tr')
//   for (let i = 0; i < columns; i++) {
//     makeCell(row);
//   }
//   table.appendChild(row);
// }

// function makeColumn() {
//   const rows = Array.from(table.childNodes);

//   rows.forEach(row => {
//     if (row.nodeName === "TR") {
//       makeCell(row)
//     }
//   })

//   // for (let i = 1; i < rows.length; i++) {
//   //   makeCell(rows[i])
//   // }
// }

// function colorize (event) {
//   const tdCell = event.target;
//   if (tdCell.tagName === 'TD') {
//     if (tdCell.className !== 'default' && tdCell.className === color) {
//         tdCell.className = 'default'
//     } else {
//         tdCell.className = color;
//     }
//   }
// }

// function getCells() {
//   let cellsArr = [];
//   const rows = Array.from(table.childNodes);
//   rows.forEach(row => {
//     const cells = Array.from(row.childNodes)
//     cellsArr = cellsArr.concat(cells)
//   })
//   return cellsArr;
// }

// function clearPalette() {
//   const cells = getCells()
//   cells.forEach(cell => {
//     const startTime = new Date;
//     console.log(startTime);
//     // while(new Date - startTime < 100) {};
//     cell.className = 'default';
//   })
// }

// function fillAllCells() {
//   const cells = getCells()
//   cells.forEach(cell => {
//     cell.className = color;
//   })
// }

// function fillGreyCells() {
//   const cells = getCells()
//   cells.forEach(cell => {
//     if (cell.className === 'default') {
//       cell.className = color;
//     }
//   })
// }

// function resetBoard() {
//   table.innerHTML = '';
// }

// select.addEventListener("change", function(event) {
//   color = event.target.value;
// })

// columnSelecter.addEventListener("change", function(event) {
//   columns = Number(event.target.value);
// })

// addRow.addEventListener("click", makeRow)

// addColumn.addEventListener("click", makeColumn)

// table.addEventListener('mouseup', function() {
//   table.removeEventListener('mouseover', colorize )
// })

// table.addEventListener('mousedown', function() {
//   table.addEventListener('mouseover', colorize )
// })

// table.addEventListener('click', colorize )

// clear.addEventListener('click', clearPalette)

// fillAll.addEventListener('click', fillAllCells)

// fillGrey.addEventListener('click', fillGreyCells)

// reset.addEventListener('click', resetBoard)

