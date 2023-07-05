//  Operator :a symbol which operation on operand is called operator.
// unary operator :1)pre 2)post
let f:number=10;
f++;
--f;
console.log(f)


// binary 
// assignment operator
let x:number=7;
x+=++x+x+--x+x--;
console.log(x)

// y+=10;
// y-=10;
// y*=2;
// y/=10;
// y%=36;
// console.log(y)

let a:number=30;
 a%=9;
 console.log(a)

// comparision operator
let g:string="30";
let z:string="30";
// let w=x==z;
let w=g===z;
console.log(w)

let p:number=10;
let q:number=30;
let r=p<q;
console.log(r)
// true=1   false=0

// Arithmetic operator



// ============ logical operator =================

let userName:string="poonam@123"
let password:number=390853;
let isLogin=userName==="poonam"&& password===390853;
console.log(isLogin);

isLogin=userName==="poonam@12" || password===39085;
console.log(isLogin)


isLogin=userName!=="poonam@12" && password===390853;
console.log(isLogin)
// console.log(!isLogin);

// statement:combination of opretaor,operand and datatype
// ternary operator
