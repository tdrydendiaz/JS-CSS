function multiplier(){
  let a, b, res
 a = Number(document.Calculator.number1.value);
 b = Number(document.Calculator.number2.value);
 res= a*b;
 document.Calculator.results.value=res;
}

function addition(){
  let a, b, res
 a = Number(document.Calculator.number1.value);
 b = Number(document.Calculator.number2.value);
 res= a+b;
 document.Calculator.results.value=res;
}

function division(){
  let a, b, res
 a = Number(document.Calculator.number1.value);
 b = Number(document.Calculator.number2.value);
 res= a/b;
 document.Calculator.results.value=res;
}

function subtraction(){
  let a, b, res
 a = Number(document.Calculator.number1.value);
 b = Number(document.Calculator.number2.value);
 res= a-b;
 document.Calculator.results.value=res;
}
