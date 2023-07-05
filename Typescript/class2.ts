export class Students{
    userNames(fName:string,lName:string,address:string){
        return fName+lName+address;
        
    }
}
let r=new Students();
let s=r.userNames("poonam","nikam","pune")
console.log(s);


// ==================================================================================//

// export class Employee{
//     // function
//     emp(firstName:string,lastName:string){
//      return firstName+lastName;
//     }
// }
// // variable
// let e=new Employee();
// let m=e.emp("mansi","divekar")
// console.log(m);


// ==================================================================================//

 export class Book{

    put(name:any,price:any){
         return name+price;
    }
}
let b=new Book();
let p=b.put("wings of fire", 300);
console.log(p);


// ==================================================================================//

export class Sam{

    sai(fname:string,lname:string){
       console.log(fname,lname);
    }
}


// ==================================================================================//

class Dom{

    constructor(){}
}