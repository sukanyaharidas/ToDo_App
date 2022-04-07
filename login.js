function check(usname, pwd, callback){
 let msg1=document.getElementById("msg1");
 let msg2=document.getElementById("msg2");

     if(pwd.value=="12345" && usname.value=="admin"){
         callback();
     }
     else{

        if(pwd.value!="12345" && usname.value=="admin"){
            msg2.innerHTML="Password should be: 12345"; 
            msg1.innerHTML=""; 
        }
             
        else if(usname.value!="admin" && pwd.value=="12345" ){
            msg1.innerHTML="User name should be: admin "; 
            msg2.innerHTML=""; 
        }
            
        else if(usname.value!="admin" && pwd.value!="12345"){
            msg2.innerHTML="Password should be: 12345";
            msg1.innerHTML="User name should be: admin ";  
        }

          
     msg1.style.color="red";
     msg2.style.color="red";
     return false;
     }
}

function login(){
    window.open('todo.html');

}