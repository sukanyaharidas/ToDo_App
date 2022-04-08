
    var output1="";
    var dem=document.getElementById("demo");

    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)
        {
            var response=JSON.parse(this.responseText);
            for(var i=0;i<response.length;i++){
            
             if(response[i].completed==true){
                output1+=`<a class="list-group-item list-group-item-action " id="list-profile-list" style="background-color:#FF6633" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile"><input type="checkbox"  style="margin-right:1em" name="chkd" id="checkedbox" checked disabled>`+   response[i].title   +`</a><br>`;
               
             }
             else if(response[i].completed==false){
                output1+=`<a class="list-group-item list-group-item-action " id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile"><input class="chk" name="chke" type="checkbox"  style="margin-right:1em" value="a" onclick='myFunc()';>`+   response[i].title   +`</a><br>`;
               
            }
            document.getElementById("demo").innerHTML=output1;
        }
        }
    }
  

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();

function myFunc()
{    
        var p= new Promise((resolve)=>{
        total=0;
        var data=document.getElementsByTagName("input");
        console.log(data);
        for(i=0;i<data.length;i++)
               {
                   if(data[i].checked==true && data[i].name=="chke" )
                   {
                       total=total+1;
    
                   }
                   
                    
                    if(total==5)
                   {
                       resolve("Congrats. 5 Tasks have been Successfully Completed");
                        
                   }           
                   
                  
               }   
            
            
    }              
    );
      p.then((alertmsg)=>{
          alert(alertmsg);
      })
            
}
