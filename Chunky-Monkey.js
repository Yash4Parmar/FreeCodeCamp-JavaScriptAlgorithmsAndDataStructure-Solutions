function chunkArrayInGroups(arr, size) {
  let arr1 = [];
  // let arr2 = [];
  // let arr3 = [];
  for(let i = 0; i < arr.length; i+=size){
    arr1.push(arr.slice(i,i+size));
  }
  // for(let i = 0; i < size; i++){
  //   arr1.push(arr[i]);
  // }
  // arr3 = arr1.concat(arr2);
  // arr3.push(arr1);
// console.log(arr);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
    return arr1;
  }
  // chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));