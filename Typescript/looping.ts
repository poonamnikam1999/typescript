// looping staement :

// for loop :
// for(initilization,condition,statement)
for(let c=1 ; c<=10 ;c++){
  console.log("value of c :"+c);
}

// while loop :
// while(condition)
let e:number=2;

while(e<=30){
    console.log("value of e :"+e)
    e++;
}

// do while:
// initilization;  do(){statement}
// while(condition)
let n:number=30;

do {
    console.log("value of n :"+n);
    n+=4;
}
while(n<=60);

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
let fruits:any[]=["Apple","orange","pineapple","Banana"]
for(let i=0; i<=fruits.length; i++){
    console.log(fruits[i]);

}

// array-object:
let stu:any[]=[{firstName:"Poonam"},{lastName:"Nikam"},{email:"poonam@123gmail.com"}]
for(let a=0; a<=stu.length; a++){
    console.log(stu[a])
}


// let student:string={
//     fname:"poonam",
//     lname:"nikam",
//     id:"2",
//     email:"poonam@123gmail.com"
// }
// console.log(student)

// while loop:
let fru:any[]=["apple","banana","orange"];
let m:number=2;
while(m<=fru.length){
    console.log(fru[m]);
    m++;
}

let y:number=1;
while(y<=40){
    console.log("value of y :"+y);
    y+=2;
}

// do-while:

let frn:any[]=["poonam","mansi","shital","prajakta","payal"]
let i:number=0;

do{
    console.log(frn[i]);
    i++;
}
while(i<=frn.length);