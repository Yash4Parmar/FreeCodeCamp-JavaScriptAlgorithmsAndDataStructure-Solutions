function getIndexToIns(arr, num) {
    arr.sort(function (a, b) {
        return a - b;
    });
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {

        // if (num >= arr[i]) {
            if (arr[i] >= num) {
            return i;
        }
        // } else if (arr[i] === num) {
        //     return i;
        //  else {
        //     return arr.length;
        // }
    }
    return arr.length;

}

//   getIndexToIns([40, 60], 50);
console.log(getIndexToIns([2, 5, 10], 15));
/************************************************************************************************************* */

/*function getIndexToIns(arr, num) {
  
    arr.push(num);
    arr.sort(function(a,b){
        return  a - b;
    });
    console.log(arr);
    return arr.indexOf(num);
}

//   getIndexToIns([40, 60], 50);
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));*/



