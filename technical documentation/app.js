var firstNum = prompt("what' s the first number ?");
var secondNum = prompt("what' s the second number ?");
var op = prompt("what calculation do you want to perform? + - * / ");
var operations = ["+", "-", "*", "/", "**", "squarefoot"];

var outcome = 0;

var i = 0;
if (//typeof(firstNum)== number && typeof(secondNum)== number && 
    operations.includes(op)) {
  while (i < 6) {

    if (op == operations[i]) {
      outcome = firstNum + op + secondNum;
      //console.log(parseInt(outcome));
      alert(eval(outcome));
    }
    i++;
  }
} else {
  alert("not valid");
};
