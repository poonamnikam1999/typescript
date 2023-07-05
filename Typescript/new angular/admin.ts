import { Student } from "./student";
import { Teacher } from "./teacher";

class Admin{
    t=new Teacher("Mansi","divekar",21);
    s=new Student(11,"poonam","nikam")
    constructor(){
        this.t.teacherName();
        let tdata=this.t.tData("Angular",200);
        console.log(tdata);
        
        this.s.showData();
        this.s.assign("angular",78);
    }
}

let a=new Admin();


// import { Teacher } from "./teacher";
// import { Student } from "./student";

// class Admin{
//     t=new Teacher("poonam","nikam",23);
//     s=new Student(11,"poonam","nikam");

//     constructor(){
//         this.t.teacherName();
//         let tdata=this.t.tData("maths",30000);
//         console.log(tdata);
        
//         this.s.showData();
//         this.s.assign("maths",80);

//     }
// }
// let a=new Admin();