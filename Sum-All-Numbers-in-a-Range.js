function sumAll(arr) {
    arr.sort((a,b) => a - b);
    // console.log(arr);
    const arr2 = [];
    let sum = 0;
    for(let i = arr[0]; i<= arr[1]; i++){
        // console.log(i);
        arr2.push(i);
    }
    for(let j = 0; j < arr2.length; j++){
        sum += arr2[j];
    }
    // console.log(arr2);
    // console.log(sum);
    return sum;
  }
  console.log(sumAll([10, 5]));
//   sumAll([5, 10]);