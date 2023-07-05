// Unary operator
var l = 30;
l++;
console.log(l);
// Arithmetic operator
var b = 20;
var c = 10;
// ============== addition ==================
var d = b + c;
console.log(d);
// ============ substraction =============
d = b - c;
console.log(d);
// =========== multiplication ==================
d = b * c;
console.log(d);
// ========= division ============
d = b / c;
console.log(d);
// ========== modulus ============
d = b % c;
console.log(d);
// =============== logical operator ===============
var email = "pn1212@gmail.com";
var passWord = 09876543;
// and operator (&&)
var isSignin = email === "pn1212@gmail.com" && passWord === 0987654;
console.log(isSignin);
// or operator (||)
isSignin = email === "pn1212@gmail.com" || passWord === 0987654;
console.log(isSignin);
// not operator (!)
isSignin = email !== "pn1212@gmail.com" && passWord === 09876543;
console.log(isSignin);
// =========================**********************================================
var s = 10;
var tt = 20;
var result = s === 10 && tt === 20;
console.log(result);
result = s === 5 || tt === 20;
console.log(result);
result = s !== 10 && tt === 20;
console.log(result);
// =============================********************====================================
var o = 30;
var nn = 50;
var isresult = o > nn && o < nn;
console.log(isresult);
isresult = o > nn || o < nn;
console.log(isresult);
isresult = o > nn && o < nn;
console.log(!isresult);
