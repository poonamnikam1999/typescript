// simple function =====

// function student(){
//     console.log("happy");
// }
// student()




function block(a:any,b:any){
  console.log(a+b);
}
block(10,20);

// return function =====
function sam(p:any, q:any){
    return p*q;
    
}
var ansr=sam(4,5);
console.log(ansr);


// ========================================

function happy(x:any,y:any){
    let happy=x*y;
    return "Welcome";
}
let t=happy(10,20);
console.log(t)


// =====================================================

function studentts(m:any){
    if(m<35){
        return ("you are fail.")
    }
    else if(m=35 && m<=50){
        return ("you are passed")
    }
    else{
        return("not valid")
    }

}
let u=studentts(35);
console.log(u);


// ======================================================
// 35-just pass>=
// >=40 c 60 b 70 a 90 a++


function studenttss(m:any){
    if(m>=35){
        return "you are just passed"
    }
    else if(m>=40){
        return "C Grade"
    }
    else if(m>=60){
        return "B Grade"
    }
    else if(m>=70){
        return "A Grade"
    }
    else if(m>=90){
        return "A++ Grade"
    }
    else{
        return "Enter valid number"
    }

}
let stude=studenttss(35);
console.log(stude);
