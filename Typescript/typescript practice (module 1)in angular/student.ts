 export class Student{
    sname:string;
    slname:string;
    smnumber:number;
    semail:string;

    constructor(){
        this.sname="Poonam";
        this.slname="Nikam";
        this.smnumber=5467893245;
        this.semail="pnikam23@gmail.com";
    }
    studentData(){
        console.log(this.sname,this.slname,this.smnumber,this.semail);
    }
}