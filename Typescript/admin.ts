import { Employee } from "./emp";

class Admin{
    constructor(){
        this.getData();
    }

emp=new Employee("milind","turerao",10);
    getData(){
        this.emp.showData(); 

    }
}

let admin=new Admin();
// admin.getData();