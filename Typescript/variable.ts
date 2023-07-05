// var:global level scope
var fname:string="Poonam";
console.log(fname)


// let :block
{
 let lastName:string="Nikam"
 console.log(lastName);
 fname="priya"
}
// error:Cannot find name 'lastName'.
// lastName="mane"
// console.log(lastName)
fname="pooja"

// const :
const author:string="prajakta"
// error:Cannot assign to 'author' because it is a constant.
// author="shital"
console.log(author)