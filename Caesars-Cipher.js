const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


function rot13(str) {
    let newStr = "";
     for(let i = 0; i < str.length; i++){
         const char = str[i];
         const isLetter  = alphabet.includes(char);

         if(!isLetter){
             newStr += char;
         }
         else{
             const charIndex = alphabet.findIndex((c)=> c == char);
             newStr += alphabet[ charIndex + 13 ] || alphabet[charIndex - 13];
         }
     }
     return newStr;
    console.log(newStr);
  }
  
  rot13("SERR PBQR PNZC");