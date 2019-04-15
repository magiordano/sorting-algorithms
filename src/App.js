import React, { Component } from 'react';
import SelectionSort from './components/SelectionSort';
import ArrayGenerator from './components/ArrayGenerator';
import BubbleSort from './components/BubbleSort';
import InsertionSort from './components/InsertionSort';

class App extends Component {
  render() {
    return (
      <div>
        <ArrayGenerator></ArrayGenerator>
        <SelectionSort></SelectionSort>
        <BubbleSort></BubbleSort>
        <InsertionSort></InsertionSort>
      </div>
    );
  }
}

export default App;
