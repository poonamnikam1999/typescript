 export class Employee{
    eid:number;
    efname:string;
    elname:string;
    eaddress:string;
    esalary:number;

    constructor(){
        this.eid=11;
        this.efname="poonam";
        this.elname="nikam";
        this.eaddress="ghansoli";
        this.esalary=10000;
    }
    employeeData(){
        console.log("Employee Data :",this.eid,this.efname,this.elname,this.eaddress,this.esalary);
        
    }
}