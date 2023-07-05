import { Exam } from "./exam";
import { Student } from "./student";

class Admin{
 s=new Student();
 e=new Exam();

 studInfo(){
   this.s.studentData();
   this.e.examData();

 }
}
let a=new Admin();
a.studInfo()