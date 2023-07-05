import { Student } from "./student";


class Teacher{
    
    constructor(){
      this.getData();
    }
    stu=new Student(12,"Poonam","Nikam");

    getData(){
        this.stu.showData();
    }
}
let tea=new Teacher();
