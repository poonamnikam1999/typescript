export class Exam{
    ename:string;
    edate:any;
    efee:number;
    esub:string;

    constructor(){
        this.ename="ssc";
        this.edate="20-3-2022";
        this.efee=300;
        this.esub="maths";
    }
    examData(){
        console.log(this.ename,this.edate,this.efee,this.esub);
    }
}