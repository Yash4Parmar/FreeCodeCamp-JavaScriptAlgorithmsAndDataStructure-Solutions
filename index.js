//console.log("hello!!!");
// let a = [1,2,3,4,5];
//console.log(a);
/*class object {
    constructor(name1,height1,weigth1,color1){
        this.name = name1;
        this.hight =  height1,
        this.weight =  weigth1,
        this.color =  color1
    }
     get Color(){
         this.name = name1;
     }

}

dog = new object('abcd',55,34,'black');
dog.name = 'asfi';
console.log(dog.name);*/



/*let dog = {
    name: 'abcd',
    hight: 80,
    weight: 50,
    color: 'black'
}
console.log(dog);
console.log(dog.name);*/

/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  arr.splice(1,5,2222, 3333, 4444, 5555);
let arr2 = arr.slice(0, 3);
console.log(arr2);
console.log(arr.length);

let weatherConditions = ['rain', 'snow', 'sleet', ...arr, 'hail', 'clear'];

// let todaysWeather = weatherConditions.slice(1, 4);
// console.log(todaysWeather);
console.log(weatherConditions);*/

/*let a = [1,2,3,4,5,6];
a.push(7);
a.unshift(0);
console.log(a);*/
/*let obj = {
    name: "abcd",
    num:3434,
    height: 67,
    weight: 12
};
obj.color = "black";
let a = Object.keys(obj);
console.log(a);*/

/*let a = 'ABCD';
const b = a.slice('');
const c = [];
for(let i = b.length - 1; i >=0 ; i--){
    c.push(b[i]);
}
console.log(c);*/
//***************************************************************************************************** */
/*function reverseString(str) {
   const a =  str;
   let resstr = '';
   const b = a.slice('');
   const c = [];


   for(let i = b.length - 1; i >=0 ; i--){
    // c.push(b[i]);
    resstr += b[i];
}
// console.log(str);
// console.log(c);
    // str = c.toString();
//  console.log(resstr);
    return resstr;
    
  }
  //   reverseString("hello");
  console.log(reverseString("hello"));*/

//   let one = ["hi"," my name is yash ",222]
//   let three = one[0] + one[1] +  one[2];
//   console.log(three);
/*function reverseString(str) {
    console.log(str[0]);
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
      }
      return reversedStr;
  }*/
/***************************************************************************************************************** */
/*function dog(name1,color1) {
    this.name = name1;
    this.color = color1;
     this.numLegs = 4;
  }
   dog.prototype = {
       numLegs: 4,
       eat: function(){
           console.log(this.name + " eats everything");
       }
   }; 
  let dog1 = new dog('dog1','black');
  let dog2 = new dog('dog2','red');
//   console.log(dog1 instanceof dog);
  console.log(dog1.prototype);
  console.log(dog2);*/
/********************************************************************************************************* */
/*function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
/*Penguin.prototype.fly = function (){
 return "Alas, this is a flinghless bird";
}*/


// Only change code above this line
/*function obj(name,age,number) {
    this.name = name;
    this.age = age;
    this.number = number;
}
obj.prototype.info = function(){
    return `MY name is ${this.name} ,  age is ${this.age} and number is ${this.number}`;
}
let st1 = new obj('Yash',19,7046550332);
console.log(st1.info());*/

/******************************************************************************************************** */
// const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
/*const getTea = (numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    console.log(teaCups);
    return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);*/
/********************************************************************************************************** */
// let arr = [1,2,3,4];
// let modify = arr.map((ele) => (ele*3));
// console.log(modify);
// console.log(arr);

// let name = [
//     {name: 'sbcd', lastname:'xyz'},
//     {name: 'uhae', lastname:'asdv'},
//     {name: 'asffew', lastname:'asdcv'},
// ];
// console.log(name);
// let newarr = name.map((a) => (`name is ${a.name} and lastname is ${a.lastname}`));
// console.log(newarr);
/*************************************************************************************************************** */
/*const a = ['zero', 'one', 'two', 'three', 'four','five','six'];
// console.log(a.slice(1));
// console.log(a.slice(1,5));
console.log(a);
// a.splice(1,5);
const b = a.slice(0,2);
// a.slice(1,4);
console.log(b);*/

/***************************************************************************************************************** */
/*const a = [5,111,6,3,7,2,0];
a.sort(function(a,b){
    return  b - a;
});
// a.sort();
console.log(a);*/
/***************************************************************************************************************** */
/*const a = 'this is a js program';
console.log(a.includes('This'));

const b = [1,2,3,4,5,6];
console.log(b.indexOf(5));
console.log(b.indexOf(0));*/
/******************************************************************************************************************* */
// const arr = [2, 4, 5, 1, 33];
// let mp = ar.map((i) => (i + 1));
// let mp2 = ar.map(
//     function (i) {
//         return i + 1;
//     });
// function filter(a){
//     if(a > -1 && Number.isInteger(a)){

//         return a;
//     }
    // let b = 10.234
    // console.log(Number.isInteger(b));
// }
// console.log(filter(ar[0]));
// let a = 4.8;
// console.log(Math.floor(a));

//  let final = ar.filter(filter).map((num) => (num*num));
// let reduce = arr.reduce(function(acc,cur){
//     if(acc < cur){
//         acc = cur
//     }
//     return acc;
// },0);
// function max(arr){
//     let com = 0;
//     for(let i = 0; i< arr.length; i++){
//         if(com < arr[i]){
//             com = arr[i];
//         }
//     }
//     return com;
// }
// console.log(max(arr));

// let reduce = ar.reduce(sum);
// console.log(reduce);

/*const arr = [
    {firstName:"Yash",lastName:"Parmar",age:19},
    {firstName:"Akshay",lastName:"kumar",age:23},
    {firstName:"MH",lastName:"Dhoni",age:46},
    {firstName:"Virat",lastName:"kohli",age:15}
];
console.log(arr);
// const newarr = arr.filter(x => x.age<20).map(x => x.firstName);
const newarr = arr.reduce(function(acc,curr){
    return acc.firstName,curr.age< 20;
},{});
console.log(newarr);*/

// const arr = [3,4,6,2,1,0,6,4,7];
// const arr2 = ['c','b','a','z','e','g','d'];
// const sorted = arr.sort((a , b ) => (a -b));
// const sorted = arr2.sort();
// console.log(sorted);
/*********************************************************************************************************** */
// const globalArray = [5, 6, 3, 2, 9];

// function nonMutatingSort(arr) {

// // const newarr = arr;
// const newarr = [...arr];
// newarr.sort((a,b) => (a - b))

//  return newarr;

// }
// console.log(globalArray);
// // nonMutatingSort(globalArray);
// console.log(nonMutatingSort(globalArray));
/********************************************************************** */
// var arr = [1, 2, 3, 1, 2, 3];

// var indices = [];

// arr.filter(function(yourArray, index) {
//  if(yourArray == 2){
// //    indices.push(index);
//    arr.splice(index,1);
//  }
// });
// console.log(indices);
// console.log(arr);
/******************************************************************************************* */
 const arr = [
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }
];
//   console.log(arr[0].first);
  for(let i in arr){
      console.log(arr[i].first);
      console.log(arr[i].last);
  }