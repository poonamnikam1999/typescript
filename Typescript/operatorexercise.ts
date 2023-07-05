// Unary operator
let l:number=30;
l++;
console.log(l);


// Arithmetic operator
let b:number=20;
let c:number=10;
// ============== addition ==================
let d=b+c;
console.log(d)

// ============ substraction =============
d=b-c;
console.log(d)

// =========== multiplication ==================
d=b*c;
console.log(d)

// ========= division ============
d=b/c;
console.log(d)

// ========== modulus ============
d=b%c;
console.log(d)


// =============== logical operator ===============

let email:string="pn1212@gmail.com";
let  passWord:number=09876543;

// and operator (&&)
let isSignin=email==="pn1212@gmail.com" && passWord===0987654;
console.log(isSignin);

// or operator (||)
 isSignin=email==="pn1212@gmail.com" || passWord===0987654;
console.log(isSignin);

// not operator (!)
isSignin=email!=="pn1212@gmail.com" && passWord===09876543;
console.log(isSignin);

// =========================**********************================================

let s:number=10;
let tt:number=20;

let result=s===10 && tt===20;
console.log(result)

result=s===5 || tt===20;
console.log(result)

result=s!==10 && tt===20;
console.log(result)

// =============================********************====================================
let o:number=30;
let nn:number=50;

let isresult=o>nn && o<nn;
console.log(isresult);

isresult=o>nn || o<nn;
console.log(isresult);

isresult=o>nn && o<nn;
console.log(!isresult);