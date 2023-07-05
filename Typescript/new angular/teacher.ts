import { Student } from "./student";

export class Teacher{
    private s=new Student(11,"Poonam","Nikam");
    tFname:string;
    tLname:string;
    tId:number
    constructor(tfn:string,tln:string,tid:number){
        this.tFname=tfn;
        this.tLname=tln;
        this.tId=tid;
       
        this.s.showData();
        this.s.assign("Maths",90);
    }

    teacherName(){
        console.log(this.tId);
        console.log(this.tFname);
        console.log(this.tLname);
        
    }

    tData(subject:string,salary:number){
        return subject+" "+salary;
    }

     
 }
 
//  let a=new Teacher("poonam","nikam",1)


// import { Student } from "./student";

// class Teacher{
//     private s=new Student(11,"poonam","nikam");
//     tfname:string;
//     tlname:string;

//     constructor(tf:string,tl:string){
//         this.tfname=tf;
//         this.tlname=tl;

//         this.s.showData();
//         this.s.assign("maths",60);
//     }
//     tname(){
//         console.log(this.tfname);
//         console.log(this.tlname);
        
        
//     }
//     tData(salary:number,subject:string){
//           return salary+" "+subject;
//     }
// }