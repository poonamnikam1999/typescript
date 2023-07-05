// import { Student } from "./class";

class Teacher{
    Stud=new Student()
    

    stu(fName:string,lName:string,address:string){
           this.Stud.userName(fName,lName,address)

    }
}

let tea=new Teacher();
tea.stu("shital","mane","ghansoli")


// ======================================================================================================
//

// class Boss{
//     emp=new Employee()
     
//     empl(firstName:string,lastName:string){
//         // this.emp.data(firstName,lastName)

//         let r=this.emp.data(firstName,lastName);
//         console.log("poonam Nikam")
//     }
// }
// let b=new Boss();
// b.empl("poonam","nikam")