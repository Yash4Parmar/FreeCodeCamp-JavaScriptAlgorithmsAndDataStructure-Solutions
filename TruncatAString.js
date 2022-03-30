function truncateString(str, num) {
    let a;
    if(num < str.length){
      a = str.slice(0,num) + "...";
    }else{
      a = str.slice(0,num);
    }
    return a;
  }
//   truncateString("A-tisket a-tasket A green and yellow basket", 8);
// console.log(  truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));