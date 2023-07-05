import { Employee } from "./employee";

export class Manager{
    private e=new Employee("shital","mane","ghansoli");

    mfname:string;
    mlname:string;
    maddress:string;

    constructor(mf:string,ml:string,ma:string){
         this.mfname=mf;
         this.mlname=ml;
         this.maddress=ma;

         this.e.showData();
         this.e.empSalary(40000);
    }
    managerinfo(){
        console.log("mfname :",this.mfname);
        console.log("mlname :",this.mlname);
        console.log("maddress :",this.maddress);
    
    }
    mData(salary:number){
        return "Manager Salary :"+salary;
    }

}
// let m=new Manager("mansi","divekar","navi mumbai");