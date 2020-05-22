class Persion{
  constructor(firstName,lastName,dob){
    this.firstName=firstName
    this.lastName=lastName
    this.birthday=new Date(dob)
  }

  greeting(){
    return `Hello there  ${this.firstName} ${this.lastName}`
  }

  calcilateAge(){
    const diff= Date.now() - this.birthday.getTime();
    const ageDate=new Date(diff);
    return Math.abs(ageDate.getUTCFullYear()-1970)
  }

  getMarried(newLastName){
    this.lastName=newLastName
  }

  static add(x,y){
    return x+y
  }
}

const mary=new Persion('karthik','lingasamy','07-15-1985')

console.log(mary.firstName)
console.log(mary.greeting())
console.log(mary.calcilateAge())
mary.getMarried('priya')
console.log(mary.greeting())

//console.log(mary.add(2,3)) //Error: mary.add is not function. Tips: Inorder to use we need to use the actual class name. 
// If you are not usng "this" keyword in your method you can define your function as static method
console.log(Persion.add(2,3))