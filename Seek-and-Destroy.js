function destroyer(arr) {
    let array = Array.from(arguments).slice(1); // array of arguments without main array 
    // console.log(array);
    // const arr2 = arguments[0];
    // let a = arguments[1]; // 2
    // let b = arguments[2];// 3
    // let c = arguments[3];// 3
    const newarr = [];
    
    for(let i = 0; i < arr.length; i++){
        if(array.indexOf(arr[i]) === -1){
           newarr.push(arr[i]);
        }
    }
    // console.log(newarr);

    return newarr;

    // arr2.filter(function(ar,index){
    //     if(ar === a){
    //         // newarr.push(index);
    //         arr2.splice(index,1);
    //     }
    // });
    // arr2.filter(function(ar,index){
    //     if(ar === b){
    //         // newarr.push(index);
    //         arr2.splice(index,1);
    //     }
    // });
    // arr2.filter(function(ar,index){
    //     if(ar === c){
    //         // newarr.push(index);
    //         arr2.splice(index,1);
    //     }
    // });
    // console.log(newarr);
    // console.log(arr2);
} 
//   destroyer([1, 2, 3, 1, 2, 3], 2, 3); 
//   destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
  destroyer([3, 5, 1, 2, 2], 2, 3, 5);