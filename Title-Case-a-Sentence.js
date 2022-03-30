    function titleCase(str) {
        str = str.toLowerCase();
        let a = str.split(" ");
        // console.log(a[0][0]);
        // console.log(a[0][0].toUpperCase());
        let b;
        let c;
        let d;
        let arr = [];
        // for(let i = 0; i < a.length; i++){
        //     b.push(a[i]);
        // }
        //  console.log(b);
        //  console.log(b[0].toUpperCase());
        for (let i = 0; i < a.length; i++) {
            //  for(let j = 0; j < a[i].length; j++){
            //   console.log( a[i][0].charAt(0).toUpperCase());
            //   console.log(str[i].toUpperCase());
            // b.push(a[i].toUpperCase());
            a[i] = a[i][0].toUpperCase() + a[i].substr(1, a[i].length).toLowerCase();
            // c = a[i].substr(1, a[i].length).toLowerCase();
            // d = b.concat(c);
            // arr.push(b);
            //  console.log(b,c,d,a[i].length);
            // console.log( a[i][0]);
            // console.log(a[i].substr(1,a[i].length).toLowerCase());
            // }
        }
        // console.log(arr);
        let str2 = a.join(' ');
        // for (let i = 0; i < a.length; i++) {
        //     if (i === a.length-1) {
        //         str2 = str2 + a[i] ;
        //     }else{
        //         str2 = str2 + a[i] + ' ';
        //     }   
        // }

        //  console.log(str2.slice(0,str2.length - 1));
        return str2;
        //  return d;
        // let str2 = "Iam A Little Tea Pot";
        // console.log(str2.toLowerCase());
        // console.log(b);
        // for(let j = 0; j < b.length; j++){
        //     console.log(b[j].substr(1,b.length).toLowerCase());
        // }
        //  console.log(str.toUpperCase());
    }
// titleCase("I'm a little tea pot");
// let answer = titleCase("sHoRt AnD sToUt");
// console.log(answer);
// titleCase("sHoRt AnD sToUt");
console.log(titleCase("sHoRt AnD sToUt"));
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")
// console.log(titleCase("I'm a little tea pot"));