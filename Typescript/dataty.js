// Datatype :1) Premitive
// 1)string
var Name = "sam";
console.log(Name);
// 2)Number
var num = 56;
console.log(num);
// 3)boolean
var num1 = true;
console.log(num1);
// 4)bigint
var num3 = 123n;
console.log(num3);
// 5)undefined
var mark;
console.log(mark);
var ss = undefined;
console.log(ss);
// 6)null
// let pass=null
// console.log(pass)
var pp = null;
console.log(pp);
// 7)symbol
// ===== 2) non-premitive ======
// 1)Array:
var fruit = ["Apple", "Banana", "Pineapple", "Orange"];
console.log(fruit);
// slice======
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
// 2)object:
var student = {
    Id: "poonam@123",
    Name: "poonam",
    Email: "Pnikam43@gmail.com"
};
// student.Id=123,
student[Symbol("Id")] = "poonam@345",
    console.log(student);
// let stu=student.Id;
// student.Id="neha123"
// console.log(student);
var car = {
    type: "Toyota",
};
car.type = "Ford";
car.type = "87";
console.log(car);
