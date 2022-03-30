/*function factorialize(num) {
    let sum = 1;
    // console.log(num);
    if(num > 0){

        for(let i = num; i > 0; i--){
            sum = sum * i;
        }
    }
    num = sum;
    console.log(num);
    return num;
  }

  
  factorialize(5);*/

 /* function findLongestWordLength(str) {
    const a = str;
    const b = a.split(' ');
    // console.log(str);
    // console.log(b[0].length);
    var mx = 1;
    for(let i = 0; i < b.length; i++){
        if(mx < b[i].length){
            mx = b[i].length;
        }
    }
    // console.log(mx);
    return mx;
  }
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
//   findLongestWordLength("The quick brown fox jumped over the lazy dog");*/

    function largestOfFour(arr) {
    
        let l;
        let result = [];

        for(let i = 0; i < arr.length; i++){
            l = arr[i][0];
            for(let j = 0; j < arr[i].length; j++){
                if(arr[i][j] > l){
                    l = arr[i][j];
                }
            }
            result[i] = l;
        }
        console.log(result);
        return result;
    }
    
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);