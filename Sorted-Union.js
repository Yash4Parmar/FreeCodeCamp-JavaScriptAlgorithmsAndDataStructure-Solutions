function uniteUnique(arr) {
    let newarr = [...arguments];
    // console.log(newarr[0][1]);
    let array = [];
    
    for(let i = 0; i < newarr.length; i++){
        for(let j = 0; j < newarr[i].length; j++){
            // array.push(newarr[i][j]);
            if (!array.includes(newarr[i][j])) {
                array.push(newarr[i][j]);
        }
    }
    // for(let i = 0; i < array.length; i++){
    //     if(!array.includes(i)){
    //         unique.push(array[i]);
    //     }
    // }
    // array.sort((a , b) => (a - b));
    // let arr2 = array.filter(((item, index) => arr.indexOf(item) === index));
}
// console.log(array);
return array;
}
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);