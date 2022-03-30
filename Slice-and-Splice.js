function frankenSplice(arr1, arr2, n) {

    let a = arr2.slice(0,n);
    let b = arr2.slice(n,arr2.length);
    // console.log(a);
    // console.log(b);
    
    for(let i = 0; i < arr1.length; i++){
        a.push(arr1[i]);
    }
    for(let i = 0; i < b.length; i++){
        a.push(b[i]);
    }
    // console.log(a);
    return a;
  }
  console.log(frankenSplice([1, 2], ["a", "b"], 1));
//   frankenSplice([1, 2, 3], [4, 5, 6], 1);