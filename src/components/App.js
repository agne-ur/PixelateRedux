import React from 'react';
import ReactDOM from 'react-dom';
import store from '../store';

class App extends React.Component {
  constructor(props) {
    super (props)
    this.state = store.getState()
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      // Invokes whenever there is a change to the store
      console.log("The store state changed. Here is the new state:", store.getState());
      // Or actually do something like update the DOM
      this.setState = store.getState();
  })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <h1>Pixelate</h1>
          <div>
            <select>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="purple">Purple</option>
              <option value="orange">Orange</option>
              <option value="pink">Pink</option>
              <option value="white">White</option>
              <option value="gold">Gold</option>
              <option value="turquoise">Turquoise</option>
              <option value="coral">Coral</option>
              <option value="skyblue">Sky Blue</option>
            </select>
            <select>
              <option value="width">Width</option>
              <option value="7">7</option>
              <option value="9">9</option>
              <option value="11">11</option>
              <option value="13">13</option>
              <option value="15">15</option>
              <option value="17">17</option>
              <option value="19">19</option>
              <option value="21">21</option>
            </select>
            <button id='add-row'>+Row</button>
            <button id='add-column'>+Column</button>
            <button id='fill-all'>Fill</button>
            <button id='fill-grey'>Fill Grey</button>
            <button id='clear'>Clear</button>
            <button id='reset'>Reset</button>
          </div>
          <table>

          </table>
        </div>
    )
  }
}

export default App
