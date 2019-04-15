import React, { Component } from 'react';

let arr = [3,4,6,1,2,7];

const insertionSort = (arr) => {

      
for(var x = 1, y; x < arr.length; x++) {
    console.log(arr);
    var temp = arr[x];
    for(var y = x - 1; y >= 0 && arr[y] > temp; y--) {
      arr[y+1] = arr[y];
    }
    arr[y+1] = temp;
  }
  console.log(arr);
  return arr;
}



class InsertionSort extends Component {

  render() {
    return (
      <button onClick={() => insertionSort(arr)}>
      Insertion Sort
    </button>
    );
  }
}
export default InsertionSort;
