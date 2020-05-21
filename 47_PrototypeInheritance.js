function Persion(firstName,lastName,dob){ //Constructor Name Should Start with Capital Letter
  this.firstName=firstName;
  this.lastName=lastName;
  
  
}

Persion.prototype.greeting=function(){
  return `Hello there ${this.firstName} ${this.lastName}`
}

const persion1=new Persion('John','Doe')

//Customet onstructor
function Customer(firstName,lastName,phone,menbership){
  Persion.call(this,firstName,lastName)
  this.phone=phone;
  this.membership=menbership;


}

//Inherit the Person prototype methods
Customer.prototype=Object.create(Persion.prototype)

//Make customer.prototype return Customer()
Customer.prototype.constructor=Customer;

const customer1=new Customer('Tom','Smith','555-555','Standard')
console.log(customer1)

//Customer greeting
Customer.prototype.greeting=function(){
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`
}
console.log(customer1.greeting())