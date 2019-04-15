import React, { Component } from 'react';
import SelectionSort from './components/SelectionSort';
import ArrayGenerator from './components/ArrayGenerator';


class App extends Component {
  render() {
    return (
      <div>
        <ArrayGenerator></ArrayGenerator>
        <SelectionSort></SelectionSort>
      </div>
    );
  }
}

export default App;
