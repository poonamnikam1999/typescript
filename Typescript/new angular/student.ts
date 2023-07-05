export class Student{
       id:number;
       fname:string;
       lname:string;
    constructor(id:number,fname:string,lname:string){
       this.id=id;
       this.fname=fname;
       this.lname=lname;
    }
    assign(subject:string,marks:number){
         if(marks<35){
            console.log("you are failed");
              
          }
      
        else if(marks>=35  && marks<40){
            console.log("you are passed");
            
        }
        
        else if(marks>=40 && marks<60){
            console.log("C Grade");
            
        }
        else if(marks>=60 && marks<70){
            console.log("B Grade");
        }
        else if(marks>=70 && marks<90){
            console.log("A Grade");
        }
        else if(marks>=90 && marks<100){
            console.log("A++ Grade");

        }
        else{
            console.log("not valid")
        }

        return subject+" "+marks;

        
    }

    showData(){
        console.log("id :",this.id);
        console.log("fname :",this.fname);
        console.log("lname :",this.lname);
    }
}