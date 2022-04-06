//************Regular Expressions*****************


// function spinalCase(str) {
//     const newstr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ").split(" ").join("-").toLowerCase();
//     // console.log(str == str.toUpperCase());
//     console.log(newstr);
//     return newstr;
//     // return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
// }


  function spinalCase(str) {
    return str.replace(/([A-Z])/g,' $1') /*Find all cap and add space at the start*/
          .replace(/[^A-Za-z0-9]/g,' ') /*Find all non alpha numeric and replace it with space*/
          .replace(/\s{1,}/g,"-") /*Convert all spaces to -*/
          .replace(/^\-|[\-]$/g,'') /*Slice - at the start and end*/
          .toLowerCase(); /*LowerCase it*/
  }


//   spinalCase('This Is Spinal Tap');
//   spinalCase("The_Andy_Griffith_Show");
// spinalCase("Teletubbies say Eh-oh");
// spinalCase("AllThe-small Things");
//   spinalCase("thisIsSpinalTap");
console.log(spinalCase("AllThe-small Things"));
