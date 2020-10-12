import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";

// We'll soon revisit the initial state of this application.
const INITIAL_STATE = {
  grid: [Array(20).fill('default')],
  selectedColor: 'default'
};


// const addColumn = document.getElementById("add-column");
// const table = document.getElementsByTagName("table")[0];
// const select = document.getElementsByTagName("select")[0];
// const clear = document.getElementById("clear");
// const fillAll = document.getElementById("fill-all");
// const fillGrey = document.getElementById("fill-grey");
// const columnSelecter = document.getElementsByTagName("select")[1];
// const reset = document.getElementById('reset');

// ACTION TYPES
/* we'll add some action types soon */
const ADD_ROW = 'ADD_ROW'
const CHANGE_COLOR = 'CHANGE_COLOR'
const COLORIZE = "COLORIZE"

// ACTION CREATORS
/* we'll also add the corresponding action creators */
const addRow = () => ({ type: ADD_ROW})
const changeColor = (color) => ({type: CHANGE_COLOR, color})
const colorize = (row, column) => ({type: COLORIZE, row, column})

// And we'll revisit this reducer.
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_ROW:
      const numCols = state.grid[0].length;
      const newRow = Array(numCols).fill('default');
      return { ...state, grid: [...state.grid, newRow] }
    case CHANGE_COLOR:
      const newColor = action.color;
      return { ...state, selectedColor: newColor}
    case COLORIZE:
      const newGrid = [...state.grid]
      newGrid[action.row] = [...newGrid[action.row]]
      newGrid[action.row][action.column] = state.selectedColor
      return { ...state, grid: newGrid}
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export {store, addRow, changeColor, colorize}
