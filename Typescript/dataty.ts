// Datatype :1) Premitive

// 1)string

let Name:string="sam";
console.log(Name)

// 2)Number
let num:number=56;
console.log(num)

// 3)boolean
let num1:boolean=true;
console.log(num1)


// 4)bigint
let num3:bigint=123n;
console.log(num3)

// 5)undefined
let mark:undefined
console.log(mark)

let ss:undefined=undefined
console.log(ss)


// 6)null
// let pass:null
// console.log(pass)

let pp:null=null;
console.log(pp)

// 7)symbol


// ===== 2) non-premitive ======
// 1)Array:

let fruit:any[]=["Apple","Banana","Pineapple","Orange"]
console.log(fruit);
// slice======
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);


// 2)object:

let student={
    Id:"poonam@123",
    Name:"poonam",
    Email:"Pnikam43@gmail.com"
}
// student.Id=123,
student[Symbol("Id")]="poonam@345",
console.log(student)


// let stu=student.Id;
// student.Id="neha123"
// console.log(student);

const car={
    type:"Toyota",
}
car.type="Ford"
car.type="87";
console.log(car);