
function pairElement(str) {
    // const arr = str.split("");
    const A = ["A","T"];
    const T = ["T","A"];
    const C = ["C","G"];
    const G = ["G","C"];
    const arr = [];
    for(let i = 0; i < str.length; i++){
        if(str[i] === "A"){
            arr.push(A);
        }
        if(str[i] === "T"){
            arr.push(T);
        }
        if(str[i] === "C"){
            arr.push(C);
        }
        if(str[i] === "G"){
            arr.push(G);
        }
    }

    console.log(arr);
    return arr;
  }

//   pairElement("GCG");
pairElement("ATCGA");