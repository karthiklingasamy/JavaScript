// Persion Constructors


function Persion(name,dob){ //Constructor Name Should Start with Capital Letter
  this.name=name;
  //this.age=age;
  this.birthday=new Date(dob);
  this.calculateAge=function(){
    const diff=Date.now()-this.birthday.getTime();
    const ageDate=new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);

  }

  //console.log(this);
}
  //console.log(this)# you can use this keyword on global scope it will give window object
const brad=new Persion('shiva','07-15-1985');
const corey=new Persion('parvathi','09-13-1993');
console.log(brad.calculateAge());
console.log(corey.calculateAge());