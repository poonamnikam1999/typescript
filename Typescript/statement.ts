// statement:combination of opretaor,operand and datatype
// if
let time:string="8pm";
 if(time=="6am"){
    console.log("Good Morning")
}
else if(time=="12pm"){
    console.log("Good Afternoon")
}
else if(time>="6pm" && time=="8pm"){
  console.log("Good Evening")
}
else if(time=="9pm"){
    console.log("Good Night")
}
else{
    console.log("Time not match")
}

// ==============================================

let age=18;
if(age<=18){
    console.log("you can vote")
}
else if(age>=18){
    console.log("you can not vote")
}
else{
    console.log("enter valid value")
}
// ================================================

let marks=35;
if(marks<=35){
    console.log("you can pass")
}
else if(marks>35){
     console.log("you can fail")
}
else{
    console.log("not")
}

// ============== switch case =====================

let days:number=8;
let day:string=""
switch(days){
    case 1:
        day="sunday"
        break;
     case 2:
        day="monday"
        break;

        case 3:
            day="tuesday"
            break;

            case 4:
                day="wendesday"
                break;

                case 5:
                    day="thursday"
                    break;

                    case 6:
                        day="friday"
                        break;

                        case 7:
                            day="saturday"
                            break;

                    default:
                        console.log("not valid")
                        break;

}
console.log(day);

