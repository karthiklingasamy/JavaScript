//Prototypes
// 1. All objects inherits from prototype 
// Object.prototype
// Person.prototype 
// Prototype chain
// 2. Prototype helps don't flood your constructure with functions. 

function Persion(firstName,lastName,dob){ //Constructor Name Should Start with Capital Letter
  this.firstName=firstName;
  this.lastName=lastName;
  this.birthday=new Date(dob);
  //this.calculateAge=function(){
  //  const diff=Date.now()-this.birthday.getTime();
  //  const ageDate=new Date(diff);
  //  return Math.abs(ageDate.getUTCFullYear() - 1970);
  //}
}

//Calculate Age
Persion.prototype.calculateAge=function(){
  const diff=Date.now()-this.birthday.getTime();
  const ageDate=new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);

}

Persion.prototype.getFullName=function(){
  return `${this.firstName} ${this.lastName}`
}

Persion.prototype.getsMarried=function(newLastName){
  this.lastName=newLastName;
}

const john= new Persion('john','Doe','07-15-1985');
const mary= new Persion('mary','Johnson','09-13-1993');

console.log(mary.calculateAge());
console.log(mary.getFullName());
mary.getsMarried('karthik');
console.log(mary.getFullName());
console.log(mary)

console.log(mary.hasOwnProperty('firstName')) //Full Name is property so it return true
console.log(mary.hasOwnProperty('getFullName')) //getFullName is prototype and not a property so it returns false