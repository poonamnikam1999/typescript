// looping staement :
// for loop :
// for(initilization,condition,statement)
for (var c = 1; c <= 10; c++) {
    console.log("value of c :" + c);
}
// while loop :
// while(condition)
var e = 2;
while (e <= 30) {
    console.log("value of e :" + e);
    e++;
}
// do while:
// initilization;  do(){statement}
// while(condition)
var n = 30;
do {
    console.log("value of n :" + n);
    n += 4;
} while (n <= 60);
// ========+++++++++++++==========
// example :1
// for::loops through a block of code a number of times.
// for/in:loops through the properties of an object.
// for/of:loops through a values of an iterable object.
// while:loops through a block of code while a specified condition is true.
// do/while:also loops through a block of code while a specified condition is true.
// let index:number=1;
// for(let i=10; i>index ; i++){
//     console.log("value of i :"+i);
// }
// condition false :infinite
// array:
var fruits = ["Apple", "orange", "pineapple", "Banana"];
for (var i_1 = 0; i_1 <= fruits.length; i_1++) {
    console.log(fruits[i_1]);
}
// array-object:
var stu = [{ firstName: "Poonam" }, { lastName: "Nikam" }, { email: "poonam@123gmail.com" }];
for (var a = 0; a <= stu.length; a++) {
    console.log(stu[a]);
}
// let student:string={
//     fname:"poonam",
//     lname:"nikam",
//     id:"2",
//     email:"poonam@123gmail.com"
// }
// console.log(student)
// while loop:
var fru = ["apple", "banana", "orange"];
var m = 2;
while (m <= fru.length) {
    console.log(fru[m]);
    m++;
}
var y = 1;
while (y <= 40) {
    console.log("value of y :" + y);
    y += 2;
}
// do-while:
var frn = ["poonam", "mansi", "shital", "prajakta", "payal"];
var i = 0;
do {
    console.log(frn[i]);
    i++;
} while (i <= frn.length);
