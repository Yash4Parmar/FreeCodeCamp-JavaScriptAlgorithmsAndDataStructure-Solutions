// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
function diffArray(arr1, arr2) {
    let newArr = [];
    // let b = false;
    // console.log(arr1.every((x) => x === arr2));
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            console.log(i);
            newArr.push(arr1[i]);
        }
    }
    console.log(newArr);
    for (let i = 0; i < arr2.length; i++) {
        // b = false;
        // for(let j = 0; j < arr2.length; j++){
        // if(arr1[i] !== arr2[i]){
        if (arr1.indexOf(arr2[i]) === -1) {
            // b = true;
            // break;
            // continue;
            console.log(i);
            newArr.push(arr2[i]);
            // }
            // if(b = false){
            // }
        }
    }
    // console.log(newArr);
    return newArr;
}

//   diffArray([1, 2, 3, 5], [1, 2, 2.5, 3, 4, 5]);
// diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//   diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);