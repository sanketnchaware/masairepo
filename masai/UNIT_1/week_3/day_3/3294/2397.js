//1.Create a file named calculator.js . Create a object named calc and define 2 properties named a and b . Assign any value to the 2 properties. Now create 4 methods named addition, subtraction, division and multiplication which will operate on the 2 properties.//

var person = {
  name : "Sidharth",
  a : 100,
  b:40,
  add:function(){
    console.log(this.a+this.b);
  },
  sub:function(){
    console.log(this.a-this.b);
  },
  div:function(){
    console.log(this.a/this.b);
  },
  mul:function(){
    console.log(this.a*this.b);
  },
}

person.add();
person.sub();
person.div();
person.mul();




































