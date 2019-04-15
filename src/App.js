import React, { Component } from 'react';
import SelectionSort from './components/SelectionSort';
import ArrayGenerator from './components/ArrayGenerator';
import BubbleSort from './components/BubbleSort';

class App extends Component {
  render() {
    return (
      <div>
        <ArrayGenerator></ArrayGenerator>
        <SelectionSort></SelectionSort>
        <BubbleSort></BubbleSort>
      </div>
    );
  }
}

export default App;
