// const allNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// const roman = {
//     1: 'I',
//     4: 'IV',
//     5: 'V',
//     9: 'IX',
//     10: 'X',
//     40: 'XL',
//     50: 'L',
//     90: 'XC',
//     100: 'C',
//     400: 'CD',
//     500: 'D',
//     900: 'CM',
//     1000: 'M'
// };

function convertToRoman(num) {
    let finalResult = "";
    // let i = 0;
    // for(let i = 0; i < allNumbers.length;){
    //     while(num >= 0){
    //     const sub = allNumbers[i]; 
    //     if(sub > num){
    //         i++;
    //     }
    //     else{
    //         num = num - sub;
    //         finalResult = finalResult + roman;
    //     }
    // }
    while (num > 0) {
    if (num >= 1000) {
      finalResult += "M"
      num -= 1000
    } else if (num >= 900) {
        finalResult += "CM"
        num -= 900
    } else if (num >= 500) {
        finalResult += "D"
        num -= 500
    } else if (num >= 400) {
        finalResult += "CD"
        num -= 400
    } else if (num >= 100) {
        finalResult += "C"
        num -= 100
    } else if (num >= 90) {
        finalResult += "XC"
        num -= 90
    } else if (num >= 50) {
        finalResult += "L"
        num -= 50
    } else if (num >= 40) {
        finalResult += "XL"
        num -= 40
    } else if (num >= 10) {
        finalResult += "X"
        num -= 10
    } else if (num >= 9) {
        finalResult += "IX"
        num -= 9
    } else if (num >= 5) {
        finalResult += "V"
        num -= 5
    } else if (num >= 4) {
        finalResult += "IV"
        num -= 4
    } else {
        finalResult += "I"
        num -= 1
    }
  }
    console.log(finalResult);
    return finalResult;
}
convertToRoman(78);