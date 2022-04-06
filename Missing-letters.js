function fearNotLetter(str) {
  let all = "abcdefghijklmnopqrstuvwxyz";
  let start = all.indexOf(str[0]);

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== all[start + i]) {
      return all[start + i];
    }
  }
  // console.log(all[start]);
  return undefined;
}

console.log(fearNotLetter("stvwx"));