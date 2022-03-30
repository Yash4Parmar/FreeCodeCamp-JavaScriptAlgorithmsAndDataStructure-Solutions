function bouncer(arr) {
    let a = [];
    let b = [];
    for (let i = 0; i < arr.length; i++) {
        // console.log((arr[i].valueOf()));
        // if ((isNaN(arr[i].valueOf()) && typeof arr[i] !== 'string')  || arr[i] == false || arr[i] == null || arr[i] == 0 || arr[i] == undefined ||  arr[i] == "") {
            // if ((Number.isNaN(arr[i]))  || arr[i] == false || arr[i] == null || arr[i] == 0 || arr[i] == undefined ||  arr[i] == "") {
                // if ((Object.is(arr[i],String))  || arr[i] == false || arr[i] == null || arr[i] == 0 || arr[i] == undefined ||  arr[i] == "") {
            if(!arr[i]){
                a.push(arr[i]);
        } else {
            b.push(arr[i]);
        }
    }
    // console.log(a);
    // console.log(b);
    return b;
}
// console.log(bouncer([null, 1*'a', 1, 2, undefined,'']));
console.log(bouncer([7, "ate",NaN,"", false, 9]));