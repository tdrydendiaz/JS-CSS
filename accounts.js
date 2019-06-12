

function makeRequest(method,url){
  return new Promise((res,rej)=>
  req=new XMLHttpRequest();
  req.onload=()=>if(req.status>=200 && req.status<=299) {resolve(req)
  }
  else{reject(new Error("Rejected")}
  req.open("GET", "http://localhost:8080/AccountSETemplate/api/account/getAllAccounts")
  req.send();
)
}

function makeRequest(method,url){
  return new Promise((res,rej)=>
  const req=new XMLHttpRequest();
  req.onload=()=>if(req.status>=200 && req.status<=299) {resolve(req)
  }
  else{reject(new Error("Rejected")}
  req.open(method, url)
  req.send();
)
}

function webreq(callback){
  req.onload=function(




    
  ){
  let res = document.getElementById("getAllAccounts");
  res.innerHTML=req.responseText;
  child();
  }
  req.open("GET", "http://localhost:8080/AccountSETemplate/api/account/getAllAccounts")
  req.send();
  }
webreq(log)
function log(){
  console.log("hello");
}






function createAnAccount(){
let req = new XMLHttpRequest();
req.onload=function(){
let res = document.getElementById('createAnAccount');
res.innerHTML=req.responseText;
let id1 = document.getElementById('idno').value;
let id2 = document.getElementById('acc').value;
let id3 = document.getElementById('fn').value;
let id4 = document.getElementById('ls').value;

const text={id:10,
  accountNumber:10,
  firstName:"Adam",
  lastName:"Stephan"};
const obj1=JSON.stringify(text).

req.open("POST", "http://localhost:8080/AccountSETemplate/api/account/createAccount")
req.send(obj1);
}

}

function deleteAnAccount(){
let req = new XMLHttpRequest();
req.onload=function(){
let res = document.getElementById('deleteAnAccount');
res.innerHTML=req.responseText;
}
req.open("DELETE", "http://localhost:8080/AccountSETemplate/api/account/deleteAccount")
req.send();
}
