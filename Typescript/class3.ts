import { Book, Sam, Students } from "./class2"


class Teachers{
    stud=new Students()

    stu(fName:string,lName:string,address:string){
        let s=this.stud.userNames(fName,lName,address);
        console.log(s);
        
        
    }
    
}
let t=new Teachers();
t.stu("shital","mane","Ghansoli")



// ================================================================================================//

// class Boss{
//     empl=new Employee()


//     back(firstName:string,lastName:string){
//           let a=this.empl.emp(firstName,lastName);
//           console.log(a)
//     }
// }
// let b=new Boss();
// b.back("prajakta","chandrashekhar")


// ============================================================================================//

class Author{
    bk=new Book()

    

    out(name:any,price:any){
          let o=this.bk.put(name,price);
          console.log(o);
    }
}
let a=new Author()
a.out("turning points",200);

// ======================================================================================//

class Happy{
    s=new Sam()

    sad(fname:string,lname:string){
         this.s.sai(fname,lname)
    }
}
let h=new Happy()
h.sad("samarth","nikam")


// ======================================================//

class Bom{
    fname:string="p";
    lname:string="n";
    id:number=1;

    constructor(fname:string,lname:string,id:number){
        console.log(fname,lname,id);
    }
}