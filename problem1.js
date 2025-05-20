class Calculator{
    constructor(num1,num2,calculation){
        this.num1 = num1;
        this.num2 = num2;
        this.calculation = calculation; 
    }
    calculate(){
        switch(this.calculation.toLowerCase()){
            case "add":
                return this.num1 + this.num2;
            case "subtract":
                return this.num1 - this.num2;
            case "divide":
            if (this.num2 !== 0) {
          return this.num1 / this.num2;
        } else {
          return "Cannot divide by zero";
        }  
         case "multiply": 
         return this.num1 * this.num2;
         default:
            return "Invalid";
        }
    }
}
let calc1 = new Calculator(10, 5, "add");
console.log("Addition:", calc1.calculate());

let calc2 = new Calculator(10, 5, "subtract");
console.log("Subtraction:", calc2.calculate());

let calc3 = new Calculator(10, 5, "multiply");
console.log("Multiplication:", calc3.calculate());

let calc4 = new Calculator(10, 5, "divide");
console.log("Division:", calc4.calculate());

let calc5 = new Calculator(10, 0, "divide");
console.log("Divide by zero:", calc5.calculate());