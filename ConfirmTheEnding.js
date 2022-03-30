function confirmEnding(str, target) {
  let a = str.slice(str.length - target.length) == target;
  return a;
}
//   confirmEnding("Bastian", "n");
   console.log(confirmEnding("Bastian", "n"));