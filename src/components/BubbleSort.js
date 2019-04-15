import React, { Component } from 'react';

let arr = [3,4,6,1,2,7];
let arr2 =[7,8,5,8,9,2,5];
const bubbleSort = (arr) => {
for(let y = arr.length; y >= 0; y--)
{
for (let x = 0; x<arr.length; x++){
    if(arr[x] >= arr[x+1]){
        let tmp = arr[x]
        arr[x] = arr[x+1]
        arr[x+1] = tmp
    }
    }
}
    console.log("final:" + arr);
    return arr;
}



class BubbleSort extends Component {

  render() {
    return (
      <div>
        {bubbleSort(arr)}
      </div>
    );
  }
}
export default BubbleSort;
