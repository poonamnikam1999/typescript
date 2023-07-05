// simple function =====
function student() {
    console.log("happy");
}
student();
function students(a, b) {
    console.log(a + b);
}
students(10, 20);
// return function =====
function sam(p, q) {
    return p * q;
}
var ansr = sam(4, 5);
console.log(ansr);
// ========================================
function happy(x, y) {
    var happy = x * y;
    return (happy);
}
var a = happy(10, 20);
console.log(a);
// =====================================================
function studentt(m) {
    if (m < 35) {
        return ("you are fail.");
    }
    else if (m = 35 && m <= 50) {
        return ("you are passed");
    }
    else {
        return ("not valid");
    }
}
var b = studentt(35);
console.log(b);
// ======================================================
// 35-just pass>=
// >=40 c 60 b 70 a 90 a++
function studentss(m) {
    if (m >= 35) {
        return "you are just passed";
    }
    else if (m >= 40) {
        return "C Grade";
    }
    else if (m >= 60) {
        return "B Grade";
    }
    else if (m >= 70) {
        return "A Grade";
    }
    else if (m >= 90) {
        return "A++ Grade";
    }
    else {
        return "Enter valid number";
    }
}
var stud = studentss(35);
console.log(stud);
