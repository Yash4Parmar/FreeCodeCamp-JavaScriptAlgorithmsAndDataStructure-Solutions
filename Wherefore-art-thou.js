function whatIsInAName(collection, source) {
   
    const argkeys = Object.keys(source); //array of object keys
    // let final = false;
    // let final = true;
    // console.log(argkeys.length);

    // console.log({ first: "Romeo", last: "Montague" }.hasOwnProperty("last"));
    // console.log({ first: "Tybalt", last: "Capulet" }[argkeys[0]]);
    // console.log({ last: "Capulet" }[argkeys[0]]);

    function Check(index){
        for(let i = 0 ; i < argkeys.length; i++){
            console.log(i);
            // if(index.hasOwnProperty(argkeys[i]) && index[argkeys[i]] === source[argkeys[i]]){
                // console.log(index[argkeys[i]] , source[argkeys[i]]);
            if(! index.hasOwnProperty(argkeys[i]) || index[argkeys[i]] !== source[argkeys[i]]){
            // if(index.hasOwnProperty(argkeys[i])){
            // if(index[argkeys[i]] === source[argkeys[i]]){
                // final = true;
                // final = false;
                return false;
            }
            // else{
            //     final = false;
            // }
        }
        // return final;
        return true;
    // }
    }
    let newarr = collection.filter(Check);
   console.log(newarr);
   
    return newarr;
  }
  
//   whatIsInAName([{ first: "Romeo", last: "Capulet" }, { first: "Mercutio", last: 'Capulet' }, { first: "Tybalt", last: "asdg" }],
//                   { last: "Capulet" });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });

// whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 });

//   whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 2, "b": 9999, "c": 3});