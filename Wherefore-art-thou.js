function whatIsInAName(collection, source) {
    const arr = [];
    for(let i = 0 ; i < collection.length; i++){
        if(collection.indexOf(source) === -1){
            arr.push(collection[i])
        }
    }
    console.log(arr);
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });