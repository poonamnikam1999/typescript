// var:global level scope
var fname = "Poonam";
console.log(fname);
// let :block
{
    var lastName = "Nikam";
    console.log(lastName);
    fname = "priya";
}
// error:Cannot find name 'lastName'.
// lastName="mane"
// console.log(lastName)
fname = "pooja";
// const :
var author = "prajakta";
// error:Cannot assign to 'author' because it is a constant.
// author="shital"
console.log(author);
