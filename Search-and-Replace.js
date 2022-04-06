function myReplace(str, before, after) {
    let pos = str.search(before);
    let newAfter = after.toLowerCase();
    let s1;
    let newstr;
    // console.log(s1);
    
 if(str[pos] == str[pos].toUpperCase()){
    s1 = newAfter[0].toUpperCase() + newAfter.slice(1);
    newstr = str.replace(before,s1);
}else{
     newstr = str.replace(before,newAfter);
 }

    // let newstr = str.replace(before,s3);
    console.log(newstr);
    return newstr;
  }
  
  myReplace("I think we should look up there", "up", "Down")
//   myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
//   myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
// myReplace("Let us go to the store", "store", "mall");