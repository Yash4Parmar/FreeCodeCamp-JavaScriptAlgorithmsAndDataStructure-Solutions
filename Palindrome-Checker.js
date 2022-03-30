function palindrome(str) {
    // const newstr = str.split("");
    // newstr.filter(word => word.trim().length > 0);
    // const newstr = str.split(' ').join('').split('');
    const newstr = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ").join('').split("");
    console.log(newstr);
    let a = true;
    // const newstr = [1,2,3,4,5];
    const str2 = [];
    for (let i = newstr.length - 1; i >= 0; i--) {
        str2.push(newstr[i]);
    }
    console.log(str2);
    for (let i = 0; i < newstr.length; i++) {
        // console.log(i);
        if (newstr[i] !== str2[i]) {
            a = false;
            // return a; 
            console.log(i);
        }
        else {
            // return a;
        }
    }
    return a;   
}
// console.log(palindrome("_eye"));
console.log(palindrome("almostomla"));
console.log(palindrome("nope"));
// console.log(palindrome("My age is 0, 0 si ega ym."));
// palindrome("never odd or even");
// palindrome("eye");