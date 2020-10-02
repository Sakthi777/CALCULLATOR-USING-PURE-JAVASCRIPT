function send(i){

    document.getElementById("p1").innerHTML+=i
  }
  
  function ok(){
   document.getElementById("p1").innerHTML=eval(document.getElementById("p1").innerHTML) 
      
  }
  function remove(){
   document.getElementById("p1").innerHTML=""
  }

  function backsapce(){
    var x=document.getElementById("p1").innerHTML
    var del =x.substr(0,x.length-1)
    document.getElementById("p1").innerHTML=del
  }