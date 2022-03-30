function findElement(arr, func) {
    let num;
    for(let i = 0; i < arr.length; i++){
      num = arr[i];
    //  console.log(num);
      if(func(num)){
        return num;
      }
    }
    // console.log(num);
    return undefined;
  }
  console.log(findElement([1, 3, 5, 9], num => num % 2 === 0));
// findElement([1, 2, 3, 4], num => num % 2 === 0);