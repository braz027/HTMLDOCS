window.onload = function(){
  if(localStorage.name != null && localStorage.email != null && localStorage.msg != null){
    document.getElementById('localoutput').innerHTML=
      "Name: "+localStorage.name+" Email: "+localStorage.email+" Message: "+localStorage.msg+". This information was saved from last time!";
  }
  if(sessionStorage.name !== undefined && sessionStorage.email !== undefined && sessionStorage.msg != undefined){ //should always be false after refresh
    document.getElementById('sessionoutput').innerHTML=
      "Name: "+sessionStorage.name+" Email: "+sessionStorage.email+" Message: "+sessionStorage.msg+". This information was saved from last time!";
  }
  if(localStorage.name != null && sessionStorage.name === undefined){
    document.getElementById('sessionoutput').innerHTML="Nothing to display here :( I didn't save your input.";
  }
};

function localclick() {
  var name = document.getElementById('localname').value;
  var email=document.getElementById('localmail').value;
  var msg=document.getElementById('localmsg').value;
  var output=document.getElementById('localoutput');
  localStorage.name=name;
  localStorage.email=email;
  localStorage.msg=msg;
  output.innerHTML="Name: "+localStorage.name+" Email: "+localStorage.email+" Message: "+localStorage.msg;
}
function sessionclick() {
  var name = document.getElementById('sessionname').value;
  var email=document.getElementById('sessionmail').value;
  var msg=document.getElementById('sessionmsg').value;
  var output=document.getElementById('sessionoutput');
  sessionStorage.name=name;
  sessionStorage.email=email;
  sessionStorage.msg=msg;
  output.innerHTML="Name: "+sessionStorage.name+" Email: "+sessionStorage.email+" Message: "+sessionStorage.msg;
}
