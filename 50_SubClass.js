class Persion{
  constructor(firstName,lastName){
    this.firstName=firstName
    this.lastName=lastName
    }

    greeting(){
      return `Hello there ${this.firstName} ${this.lastName}`
    }
}

class Customer extends Persion{
  constructor(firstName,lastName,phone,membership) {
    super(firstName,lastName);
    this.phone=phone
    this.membership=membership

  }

  static getMembershipCost(){
    return 500
  }
}

const john=new Customer('karthik','lingasamy','8200444','Standard')
console.log(john)

console.log(john.greeting())

console.log(Customer.getMembershipCost())