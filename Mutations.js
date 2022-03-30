function mutation(arr) {
    let str1 = arr[0].toLowerCase().split('');
    let str2 = arr[1].toLowerCase().split('');
    // str1.toLowerCase();
    console.log(str1);
    console.log(str2);
    let a = true;
    // console.log(typeof a);
    for (let i = 0; i < str2.length; i++) {
        // console.log(i);
        if (str1.indexOf(str2[i]) === -1) {
            a = false;
            // break;
            // a = true;
            // return a;
        }
        // continue;
        // a = 1;
        // else {
        //     // return a;
        // }
    }
    return a;
    // console.log(str1.includes(str2));
}
// console.log(mutation(["Alien", "line"]));
console.log(mutation(["hello", "hey"]));
// console.log(mutation(["hello", "eno"]));