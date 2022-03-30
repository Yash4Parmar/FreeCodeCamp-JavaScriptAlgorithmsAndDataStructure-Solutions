function repeatStringNumTimes(str, num) {
    let a = str;
    if(num > 0){
        for(let i = 1; i < num; i++){
            // console.log(str);
            a+=str;
        }
        return a;
    }
    else{
        return "";
    }
    // console.log(a);
  }
//   repeatStringNumTimes("*", 3);
//   repeatStringNumTimes("*", 3);
//   repeatStringNumTimes("abc", -2);
  console.log(repeatStringNumTimes("abc", 2));

