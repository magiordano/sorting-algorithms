import React, { Component } from 'react';

let arr = [3,4,6,1,2,7];

const selectionSort = (arr) => {
  for(let x = 0; x< arr.length; x++){
    let minIndex = x;
    for(let y = x+1; y<arr.length;y++){
      if(arr[y] < arr[minIndex])
        minIndex = y
    }
    let tmp = arr[minIndex]
    arr[minIndex] = arr[x]
    arr[x] = tmp
  }
  return arr
}



class SelectionSort extends Component {

  render() {
    return (
      <div>
        {selectionSort(arr)}
      </div>
    );
  }
}
export default SelectionSort;
