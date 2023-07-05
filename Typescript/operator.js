//  Operator :a symbol which operation on operand is called operator.
// unary operator :1)pre 2)post
var f = 10;
f++;
--f;
console.log(f);
// binary 
// assignment operator
var x = 7;
x += ++x + x + --x + x--;
console.log(x);
// y+=10;
// y-=10;
// y*=2;
// y/=10;
// y%=36;
// console.log(y)
var a = 30;
a %= 9;
console.log(a);
// comparision operator
var g = "30";
var z = "30";
// let w=x==z;
var w = g === z;
console.log(w);
var p = 10;
var q = 30;
var r = p < q;
console.log(r);
// true=1   false=0
// Arithmetic operator
// ============ logical operator =================
var userName = "poonam@123";
var password = 390853;
var isLogin = userName === "poonam" && password === 390853;
console.log(isLogin);
isLogin = userName === "poonam@12" || password === 39085;
console.log(isLogin);
isLogin = userName !== "poonam@12" && password === 390853;
console.log(isLogin);
// console.log(!isLogin);
// statement:combination of opretaor,operand and datatype
// ternary operator
