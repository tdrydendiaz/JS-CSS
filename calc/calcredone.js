// let result;
// let a;
// let b;
//

//
// function

function multiplier(){
let result= document.getElementById("result")
let a = Number(document.getElementById("number1").value);
let b = Number(document.getElementById("number2").value);
 result.innerHTML= a*b;
}

function addition(){
  let result=document.getElementById("result")
  let a = Number(document.getElementById("number1").value);
  let b = Number(document.getElementById("number2").value);
 result.innerHTML= a+b;
}

function division(){
    let result=document.getElementById("result")
    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);
 result.innerHTML= a/b;
}

function subtraction(){
    let result=document.getElementById("result")
    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);
result.innerHTML= a-b;

}
