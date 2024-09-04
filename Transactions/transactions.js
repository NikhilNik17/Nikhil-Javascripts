function login(){
    let username=(document.getElementById("username").value);
   if(username=="nikhil"){
     window.location.href='transactions2.html?';
   }else{alert("Invalid Username");

   }


}

function secure(){
    let username=(document.getElementById("password").value);
   if(username=="2024"){
     window.location.href='transaction3.html?';
   }else{alert("Invalid Password");

   }


}

function credit(){
    {
     window.location.href='trans(credit).html?';
   }

   

}

function debit(){
   {
     window.location.href='trans(debit).html?';
   }

}



function continueb(){
    let pin=prompt("Enter Your Pin");
    if(pin==2024){
        window.open("./trans(success).html","_blank");
    }else{
        alert("Invaild Pin");
    }
}

function continuedeb(){
  let pin=prompt("Enter Your Pin");
  if(pin==2024){
      window.open("./trans(success).html","_blank");
  }else{
      alert("Invaild Pin");
  }
}
 function checkbal(){
  let pin=prompt("Enter Your Pin");
  if(pin==2024){
      window.open("./transaction3.html","_blank");
  }else{
      alert("Invaild Pin");
  }

 }

 function logout(){
  {
    window.location.href='transactions.html?';
  }

}


function transb(){
  {
    window.open("./Transactions/transactions.html");
  }

}

function shopp(){
  {
    window.open("./Shopping/index.html");
  }

}
